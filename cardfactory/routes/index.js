var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '메인11', name: 'tee' });
});

/* GET join page. */
router.get('/join', function(req, res, next) {
  res.render('join-page', { title: '회원가입' });
});


module.exports = router;
