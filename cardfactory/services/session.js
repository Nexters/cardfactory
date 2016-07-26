function SessionService() {

}

SessionService.hasSession = function (req) {
  return (typeof req.session !== "undefined" && typeof req.session.id !== "undefined");
};

SessionService.getSession = function (req) {
  return {
    id: req.session.id,
    nickname: req.session.nickname
  };
};

SessionService.getSessionId = function (req) {
  return req.session.id;
};

SessionService.registerSession = function (req, user) {
  req.session.id = user.id;
  req.session.nickname = user.nickname;
};

SessionService.destroySession = function (req) {
  req.session.destroy();
};

module.exports = SessionService;