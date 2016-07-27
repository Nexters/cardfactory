var User = require('../models/user');

function UserController() {

}

UserController.getUserPageById = function(req, res, next) {
  
  req.params.id;

  // res.render('user-page', { title: '유저' });
};

UserController.postLogin = function(req, res, next) {
  //TODO: 로그인 라우터
  res.send('respond with a resource');
};

UserController.postJoin = function(req, res, next) {
  //TODO: 회원가입 라우터
  res.send('respond with a resource');
};

module.exports = UserController;
