var express = require('express');
var router = express.Router();
var Card = require('../models/card');

/* GET card list page. */
router.get('/', function(req, res, next) {
  //TODO: get card list from Card model

  res.render('card-list-page', { title: '카드 목록 페이지' });
});

/* GET card page. */
router.get('/:id', function(req, res, next) {
  //TODO: get card by id from Card model

  res.render('card-page', { title: '카드 페이지' });
});

/* GET cards edit page. */
router.get('/edit', function(req, res, next) {
  res.render('card-edit-page', { title: '카드 수정 페이지' });
});

module.exports = router;
