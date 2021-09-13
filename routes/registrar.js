var express = require('express');
const registrarController = require('../controllers/registrarController');
var router = express.Router();



router.get('/', registrarController.index)
router.get('/registrar', registrarController.index)

module.exports = router;
