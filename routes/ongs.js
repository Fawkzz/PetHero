var express = require('express');
const ongsController = require('../controllers/ongsController');
var router = express.Router();




router.post('/', ongsController.post)
router.get('/cadastrar', ongsController.cadastrar)
router.get('/listar', ongsController.listar)


module.exports = router;