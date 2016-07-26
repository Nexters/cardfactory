var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  //TODO: 로그인 라우터
  res.send('respond with a resource');
});

router.post('/join', function(req, res, next) {
  //TODO: 회원가입 라우터
  res.send('respond with a resource');
});

module.exports = router;
