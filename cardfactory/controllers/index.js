
function IndexController() {

}

IndexController.getMainPage = function(req, res, next) {
  res.render('index', { title: '메인', name: 'tee' });
};

IndexController.getLoginPage = function(req, res, next) {
  res.render('login-page', {title: '로그인'});
};

IndexController.getJoinPage = function(req, res, next) {
  res.render('join-page', { title: '회원가입' });
};

module.exports = IndexController;
