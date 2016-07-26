var express = require('express');
var router = express.Router();
var CardController = require('../controllers/card');

/**
 * @api {get} /cards Get Card List Page
 * @apiName GetCardListPage
 * @apiGroup Card
 */
router.get('/', CardController.getCardListPage);

/**
 * @api {get} /cards/:id Get Card Page
 * @apiName GetCardPage
 * @apiGroup Card
 *
 * @apiParam {String} id Card unique id
 */
router.get('/:id', CardController.getCardPageById);

/**
 * @api {get} /cards/edit Get Card Edit Page
 * @apiName GetCardEditPage
 * @apiGroup Card
 */
router.get('/edit', CardController.getCardEditPage);

module.exports = router;
