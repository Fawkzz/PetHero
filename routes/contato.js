var express = require('express');
const contatoController = require('../controllers/contatoController');
var router = express.Router();



router.get('/', contatoController.index)


module.exports = router;