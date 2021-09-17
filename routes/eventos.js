var express = require('express');
const eventosController = require('../controllers/eventosController');
var router = express.Router();



router.post('/', eventosController.post)

module.exports = router;