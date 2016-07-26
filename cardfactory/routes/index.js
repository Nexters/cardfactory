var express = require('express');
var router = express.Router();
var IndexController = require('../controllers/index');

/* GET home page. */
router.get('/', IndexController.getMainPage);

/* GET join page. */
router.get('/join', IndexController.getJoinPage);


module.exports = router;
