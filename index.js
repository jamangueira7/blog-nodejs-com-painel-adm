const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

app.set('view engine', 'ejs');

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
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
   console.log('O servidor está rodando!');
});
