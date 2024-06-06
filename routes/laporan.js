var express = require('express');
var router = express.Router();
const laporanController = require('../controller/laporanController');

/* GET users listing. */

router.get('/all', laporanController.getAllLaporan);
router.post('/create', laporanController.addLaporan);
router.post('/respon/:id', laporanController.resLaporan);

module.exports = router;
