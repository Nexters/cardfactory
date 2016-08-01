var Card = require('../models/card');
var Session = require('../service/session');

function CardController() {

}

CardController.getCardListPage = function(req, res, next) {
  //TODO: get card list from Card model
  Card.get(req.query, function(err, result) {
    console.log(result);
    res.render('card-list-page', { title: '카드 목록 페이지' });
  });
};

CardController.getCardPageById = function(req, res, next) {
  //TODO: get card by id from Card model

  res.render('card-page', { title: '카드 페이지' });
};

CardController.getCardEditPage = function(req, res, next) {
  console.log("CARD EDIT");
  res.render('card-edit-page', { title: '카드 수정 페이지' });
};

CardController.postCard = function(req, res, next) {
  if (!Session.hasSession(req)) {
    res.status(500).send('Not login');
    return;
  }
  req.body.userId = Session.getSessionId(req);
  Card.create(req.body, function(err, result) {
    if (err) {
      res.status(400).send(err);
      return;
    }
    res.status(200).send(result);
  });
};

module.exports = CardController;
