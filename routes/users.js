var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');
const middleware = require('../middleware/checkLogin');

/* GET users listing. */

router.get('/', middleware.checkAuth, (req, res, next) => {
  if(req.user) {
    res.render('users/index', { title: 'Sistem Informasi Keamanan dan Ketertiban Masyarakat Malinau', user: req.user});
  }else {
    res.redirect('/users/login');
  }
});

router.get('/login', (req, res, next) => {
  res.render('users/login', { title: 'Sistem Informasi Keamanan dan Ketertiban Masyarakat Malinau' });
});

router.get('/profile', middleware.checkAuth, (req, res, next) => {
  res.render('users/profile', { title: 'Sistem Informasi Keamanan dan Ketertiban Masyarakat Malinau',  user: req.user});
});

router.get('/profile/update', middleware.checkAuth, (req, res, next) => {
  res.render('users/update', { title: 'Sistem Informasi Keamanan dan Ketertiban Masyarakat Malinau',  user: req.user});
});

router.get('/create', (req, res) => {
  res.render('users/create', { title: 'Sistem Informasi Keamanan dan Ketertiban Masyarakat Malinau' });
});


router.post('/login', userController.loginUser);
router.get('/logout', userController.logoutUser);
router.post('/create', userController.addUser);
router.get('/all', userController.getAllUser);
router.get('/profile/:id', middleware.checkAuth, userController.getUser);
router.patch('/update/:id', middleware.checkAuth, userController.updateUser);
router.delete('/delete/:id', middleware.checkAuth, userController.deleteUser);
router.post('/cekkode', userController.cekKode);

module.exports = router;
