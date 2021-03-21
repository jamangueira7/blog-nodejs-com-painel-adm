const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const connection = require('./database/database');

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');
const userController = require('./users/UsersController');

const Article = require('./articles/Article');
const Category = require('./categories/Category');
const User = require('./users/User');

app.set('view engine', 'ejs');

//confi sessions
app.use(session({
    secret: "umtextoqualquer",
    cookie: {
        maxAge: 30000000,
    }
}));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection
    .authenticate().then(() => {
        console.log('Conexão feita com sucesso');
    }).catch((err) => {
        console.log(err);
    });

app.use('/', categoriesController);
app.use('/', articlesController);
app.use('/', userController);

app.get('/', (req, res) => {
    Article.findAll({
        order: [
            ['id', 'DESC']
        ],
        limit: 4
    }).then((articles) => {
        Category.findAll().then((categories) => {
            res.render('index', { articles, categories });
        });
    });
});

app.get('/:slug', (req, res) => {
    var slug = req.params.slug;

    Article.findOne({
        where: {
            slug: slug
        }
    }).then((article) => {
        if(article !== undefined) {
            Category.findAll().then((categories) => {
                res.render('article', { article, categories });
            });
        } else {
            res.redirect('/');
        }
    }).catch((err) => {
        res.redirect('/');
    });
});

app.get('/category/:slug', (req, res) => {
    var slug = req.params.slug;

    Category.findOne({
        where: {
            slug: slug
        },
        include: [{ model: Article }]
    }).then((category) => {
        if(category !== undefined) {
            Category.findAll().then((categories) => {
                res.render('index', { articles: category.articles, categories });
            });
        } else {
            res.redirect('/');
        }
    }).catch((err) => {
        res.redirect('/');
    });
});

app.get('/authenticate/login', (req, res) => {

    res.render('admin/users/login');
});

app.post('/authenticate', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({
        where: {
            email: email
        }
    }).then((user) => {

        if(user != undefined) {
            var correct = bcrypt.compareSync(password, user.password);

            if(correct) {
                req.session.user = {
                    id: user.id,
                    email: user.email,
                };

                res.json(req.session.user);
            } else {
                res.redirect('/authenticate/login');
            }
            /*Category.findAll().then((categories) => {
                res.render('index', { articles: category.articles, categories });
            });*/
        } else {
            res.redirect('/authenticate/login');
        }
    }).catch((err) => {
        res.redirect('/authenticate/login');
    });
});

app.listen(3000, () => {
   console.log('O servidor está rodando!');
});
