const express = require('express');
const router = express.Router();
const User = require('./User');
const bcrypt = require('bcryptjs');

router.get('/admin/users', (req, res) => {
   User.findAll().then((users) => {
      res.render('admin/users/index', { users });
   })
});

router.get('/admin/users/new', (req, res) => {
   res.render('admin/users/new');
});

router.post('/users/save', (req, res) => {
   var email = req.body.email;
   var password = req.body.password;

   User.findOne({ where: { email: email }})
       .then((user) => {
          console.log(user)
          if(user != undefined) {
             res.redirect('/admin/users/new');
          } else {
             var salt = bcrypt.genSaltSync(10);
             var hash = bcrypt.hashSync(password, salt);

             User.create({
                email,
                password: hash
             }).then(() => {
                res.redirect('/');
             }).catch((err) => {
                res.redirect('/');
             });
          }
      });

});

router.get('/authenticate/login', (req, res) => {

   res.render('admin/users/login');
});

router.get('/authenticate/logout', (req, res) => {

   req.session.user = undefined;

   res.redirect('/');
});

router.post('/authenticate', (req, res) => {
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

            res.redirect('/admin/articles');
         } else {
            res.redirect('/authenticate/login');
         }
      } else {
         res.redirect('/authenticate/login');
      }
   }).catch((err) => {
      res.redirect('/authenticate/login');
   });
});

module.exports = router;
