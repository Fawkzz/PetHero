var express = require('express');
const multer  = require('multer');
const path = require('path')
const storage = multer.diskStorage({
    destination: (req, res, cb) =>{
        cb(null, "./public/data/uploads")
    },
    filename:  (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })
const eventosController = require('../controllers/eventosController');
var router = express.Router();
const {eventosCreateValidator} = require("../middleware/eventosValidatorMiddleware")
//var bodyParser = require('body-parser');
//const urlEncodedParser = bodyParser.urlencoded({ extended: false });


router.get('/cadastrar',  eventosController.viewForm)
router.post('/cadastrar', upload.single('logo'), eventosCreateValidator, eventosController.salvarForm)
router.get('/listar', eventosController.listar)
router.get('/editar', eventosController.editar)
router.post('/editar/:id', eventosController.editar)
router.delete('/excluir', eventosController.excluir)

module.exports = router;