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
const petsController = require('../controllers/petsController');
var router = express.Router();
const {petsCreateValidator} = require("../middleware/petsValidatorMiddleware")
//var bodyParser = require('body-parser');
//const urlEncodedParser = bodyParser.urlencoded({ extended: false });


router.get('/cadastrarPets',  petsController.viewForm)
router.post('/cadastrar', upload.single('logo'), petsCreateValidator, petsController.salvarForm)
router.get('/listar', petsController.listar)
router.get('/editar', petsController.editar)
router.post('/editar/:id', petsController.editar)
router.delete('/excluir', petsController.excluir)

module.exports = router;