
function IndexController() {

}

IndexController.getMainPage = function(req, res, next) {
  res.redirect('/cards');
};

IndexController.getLoginPage = function(req, res, next) {
  res.render('login-page', {title: '로그인'});
};

IndexController.getJoinPage = function(req, res, next) {
  res.render('join-page', { title: '회원가입' });
};

module.exports = IndexController;
