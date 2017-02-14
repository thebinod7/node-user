var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
   res.render('index',{'title':'User Management - Home'});
});

router.get('/signup',function (req,res) {
    res.render('signup',{title:'Signup'});
});

router.get('/login',function (req,res) {
    res.render('login');
});

router.get('/dashboard',function (req,res) {
    res.render('secure/dashboard');
});

router.get('/forgot',function (req,res) {
    res.render('auth/forgot');
});

router.get('/reset_password',function (req,res) {
    res.render('auth/reset_password');
});

module.exports = router;