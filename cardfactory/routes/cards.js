var express = require('express');
var router = express.Router();

/* GET cards edit. */
router.get('/edit', function(req, res, next) {
  res.render('card-edit-page', { title: 'Express' });
});

module.exports = router;
