var express = require('express');
const eventosController = require('../controllers/eventosController');
var router = express.Router();



router.post('/', eventosController.post)
router.get('/listar', eventosController.listar)
router.get('/cadastrar', eventosController.cadastrar)

module.exports = router;