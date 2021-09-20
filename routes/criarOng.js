var express = require('express');
const criarOngController = require('../controllers/criarOngController');
var router = express.Router();



router.post('/', criarOngController.post)

module.exports = router;