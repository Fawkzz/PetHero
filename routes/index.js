var express = require('express');
const homeController = require('../controllers/homeController');
var router = express.Router();


router.get('/index', homeController.index)
router.get('/home_logada', function(req, res){
  res.render('home_logada')  
})


module.exports = router;
