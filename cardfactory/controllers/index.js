
function IndexController() {

}

IndexController.getMainPage = function(req, res, next) {
  res.render('index', { title: '메인11', name: 'tee' });
};

IndexController.getJoinPage = function(req, res, next) {
  res.render('join-page', { title: '회원가입' });
};

module.exports = IndexController;
