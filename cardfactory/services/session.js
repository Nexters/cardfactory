
function SessionService() {

}

SessionService.hasSession = function (req) {
  return (typeof req.session !== "undefined" && typeof req.session.userId !== "undefined");
};

SessionService.getSession = function (req) {
  return {
    userId: req.session.userId,
    nickname: req.session.nickname
  };
};

SessionService.getSessionId = function (req) {
  return req.session.userId;
};

SessionService.registerSession = function (req, user) {
  req.session.userId = user.userId;
  req.session.nickname = user.nickname;
};

SessionService.destroySession = function (req) {
  req.session.destroy();
};

module.exports = SessionService;