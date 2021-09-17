var express = require('express');
const cadastrarEventosController = require('../controllers/cadastrarEventosController');
var router = express.Router();



router.get('/', cadastrarEventosController.index)

module.exports = router;
