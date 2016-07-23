var express = require('express');
var router = express.Router();
var Card = require('../models/card');

/**
 * @api {get} /cards Get Card List Page
 * @apiName GetCardListPage
 * @apiGroup Card
 */
router.get('/', function(req, res, next) {
  //TODO: get card list from Card model

  res.render('card-list-page', { title: '카드 목록 페이지' });
});

/**
 * @api {get} /cards/:id Get Card Page
 * @apiName GetCardPage
 * @apiGroup Card
 *
 * @apiParam {String} id Card unique id
 */
router.get('/:id', function(req, res, next) {
  //TODO: get card by id from Card model

  res.render('card-page', { title: '카드 페이지' });
});

/**
 * @api {get} /cards/edit Get Card Edit Page
 * @apiName GetCardEditPage
 * @apiGroup Card
 */
router.get('/edit', function(req, res, next) {
  res.render('card-edit-page', { title: '카드 수정 페이지' });
});

module.exports = router;
