var express = require('express');
const homeController = require('../controllers/homeController');
var router = express.Router();




router.get('/index', homeController.index)


module.exports = router;
