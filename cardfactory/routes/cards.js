var express = require('express');
var router = express.Router();

/* GET cards edit. */
router.get('/', function(req, res, next) {
  res.render('card-list-page', { title: '카드 목록 페이지' });
});

/* GET cards edit. */
router.get('/edit', function(req, res, next) {
  res.render('card-edit-page', { title: '카드 수정 페이지' });
});

module.exports = router;
