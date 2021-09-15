var express = require('express');
const saibaMaisController = require('../controllers/saibaMaisController');
var router = express.Router();



router.get('/', saibaMaisController.index)

module.exports = router;
