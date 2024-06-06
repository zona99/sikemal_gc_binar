var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sistem Informasi Keamanan dan Ketertiban Masyarakat Malinau' });
});

module.exports = router;
