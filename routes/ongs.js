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
const ongsController = require('../controllers/ongsController');
var router = express.Router();
const {ongsCreateValidator} = require("../middleware/ongsValidatorMiddleware")
//var bodyParser = require('body-parser');
//const urlEncodedParser = bodyParser.urlencoded({ extended: false });


router.get('/cadastrar',  ongsController.viewForm)
router.post('/cadastrar', upload.single('logo'), ongsCreateValidator, ongsController.salvarForm)
router.get('/listar', ongsController.listar)
router.get('/editar', ongsController.editar)
router.post('/editar/:id', ongsController.editar)
router.delete('/excluir', ongsController.excluir)

module.exports = router;