var express = require('express');
var router = express.Router();

/* GET user page */
router.get('/:id', function(req, res, next) {
  res.render('user-page', { title: '유저' });
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
