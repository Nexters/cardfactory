var Card = require('../models/card');

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

  res.render('card-edit-page', { title: '카드 수정 페이지' });
};

module.exports = CardController;
