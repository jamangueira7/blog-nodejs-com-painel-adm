const express = require('express');
const router = express.Router();
const User = require('./User');

router.get('/admin/users', (req, res) => {
   res.send('Listagem de users')
});

router.get('/admin/users/new', (req, res) => {
   res.render('admin/users/new');
});

module.exports = router;
