var express = require('express');
var router = express.Router();
var IndexController = require('../controllers/index');

/* GET home page. */
router.get('/', IndexController.getMainPage);

/* GET join page. */
router.get('/join', IndexController.getJoinPage);


router.get('/testerror', function(req, res) {
  res.status(400).send("ERROR TEXT");
});

module.exports = router;
