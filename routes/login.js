var express = require('express');
const loginController = require('../controllers/loginController');
var router = express.Router();
const {loginValidator, esqueceuLoginValidator, createLoginValidator} = require("../middleware/loginValidatorMiddleware")



router.get('/', loginController.loginView)
router.get('/logout', loginController.logout)
router.post('/', loginValidator, loginController.loginPost)
router.get('/esqueceuSenha', loginController.esqueceuSenhaView)
router.post('/esqueceuSenha', esqueceuLoginValidator, loginController.esqueceuSenhaPost)
router.get('/registrarLogin', loginController.registrarView)
router.post('/registrarLogin', createLoginValidator, loginController.registrarCreatePost)


module.exports = router;
