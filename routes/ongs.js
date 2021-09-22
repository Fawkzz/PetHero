var express = require('express');
const ongsController = require('../controllers/ongsController');
var router = express.Router();



router.get('/', ongsController.index)

module.exports = router;   