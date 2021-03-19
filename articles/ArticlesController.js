const express = require('express');
const router = express.Router();
const Category = require('../categories/Category');
const Article = require('./Article');
const slugify = require('slugify');

router.get('/admin/articles', (req, res) => {
   Article.findAll({
      include: [{ model: Category }]
   }).then((articles) => {
      res.render('admin/articles/index', { articles });
   });
});

router.get('/admin/articles/new', (req, res) => {
   Category.findAll().then((categories) => {
      res.render('admin/articles/new', { categories });
   });
});

router.post('/articles/save', (req, res) => {
   var title = req.body.title;
   var body = req.body.body;
   var category = req.body.category;

   Article.create({
      title,
      body,
      slug: slugify(title),
      categoryId: category,
   }).then(() => {
      res.redirect('/admin/articles');
   });
});

module.exports = router;
