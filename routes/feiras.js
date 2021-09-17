var express = require('express');
const feirasController = require('../controllers/feirasController');
var router = express.Router();



router.get('/', feirasController.index)

module.exports = router;   