var Card = require('../models/card');
var Session = require('../services/session');
var config = require('./../config/index');
function CardController() {

}
 
CardController.getCardListPage = function(req, res, next) {
  //TODO: get card list from Card model
  
  req.params.pageNum = req.params.pageNum || 0;
  req.params.perPage = req.params.perPage || 100;

  Card.get(req.params, function(err, result) {

    for( i in result ){
      result[i].content = result[i].content.split('\n');
    }

    if(Session.hasSession(req)){
      res.render('card-list-page', { 
        title: '카드 목록 페이지' ,
        data : result, 
        imgIP : config.imgIP,
        userId : Session.getSessionId()
      });
    }else{
      res.render('card-list-page', { title: '카드 목록 페이지' , data : result, imgIP : config.imgIP});
    }
  });
};

CardController.getCardPageById = function(req, res, next) {
  //TODO: get card by id from Card model
  Card.getById(req.params, function(err, result) {
    console.log(result);

    var contents = result.content.split('\n');
    var sources = result.source.split('\n');

    res.render('card-page', { title: '카드 페이지' , data : result, content : contents, source : sources, writer : result.nickname});
  });
};

CardController.getCardCreatePage = function(req, res, next) {
  res.render('card-edit-page', { title: '새 카드 페이지' });
};

CardController.getCardEditPage = function(req, res, next) {
  res.render('card-edit-page', { title: '카드 수정 페이지' });
};

CardController.countUserCard = function(req, res, next) {

  req.params.userCardNum=req.params.userId;

  Card.getUserCard(req.params, function(err, result) {
    res.render('card-usercard-page', { userCardNum: req.params.userCardNum });
  });
};

CardController.getUserCardPage = function(req, res, next) {

  req.params.pageNum = req.params.pageNum || 0;
  req.params.perPage = req.params.perPage || 100;
  req.params.userId=req.params.userId;

  Card.getUserCard(req.params, function(err, result) {
    res.render('card-usercard-page', { userCardNum: req.params.userCardNum, userId: req.params.userId, data: result , imgIP : config.imgIP});
  });
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
