var Card = require('../models/card');
var Session = require('../services/session');

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


CardController.getUserCardPage = function(req, res, next) {
  res.render('card-usercard-page', { title: '사용자 작성 카드 페이지' });
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

CardController.deleteCardById = function(req, res) {
  if (!Session.hasSession(req)) {
    res.status(500).send('Not login');
    return;
  }
  req.params.userId = Session.getSessionId(req);
  Card.deleteById(req.params, function(err, result) {
    if (err) {
      res.status(400).send(err);
      return;
    }
    res.status(200).send(result);
  });
};

module.exports = CardController;
