var express = require('express');
const doacaoController = require('../controllers/doacaoController');
var router = express.Router();



router.get('/', doacaoController.index)

module.exports = router;