var express = require('express');
const loginController = require('../controllers/loginController');
var router = express.Router();



router.get('/', loginController.index)
router.get('/esqueceuSenha', loginController.esqueceu)


module.exports = router;
