var express = require('express');
const quemSomosController = require('../controllers/quemSomosController');
var router = express.Router();



router.get('/', quemSomosController.index)

module.exports = router;