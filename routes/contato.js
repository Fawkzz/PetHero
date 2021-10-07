var express = require('express');
const multer  = require('multer');
const path = require('path')
const storage = multer.diskStorage({
    destination: (req, res, cb) =>{
        cb(null, "./data/uploads")
    },
    filename:  (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })
const contatosController = require('../controllers/contatosController');
var router = express.Router();
const {contatoCreateValidator} = require("../middleware/contatoValidatorMiddleware")
//var bodyParser = require('body-parser');
//const urlEncodedParser = bodyParser.urlencoded({ extended: false });


router.get('/',  contatosController.viewForm)
router.post('/', upload.single('logo'), contatoCreateValidator, contatosController.salvarForm)
router.get('/listar', contatosController.listar)
router.get('/editar', contatosController.editar)
router.post('/editar/:id', contatosController.editar)
router.delete('/excluir', contatosController.excluir)

module.exports = router;