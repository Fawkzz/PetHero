var express = require('express');
const cadastrarOngController = require('../controllers/cadastrarOngController');
var router = express.Router();



router.get('/', cadastrarOngController.index)

module.exports = router;
