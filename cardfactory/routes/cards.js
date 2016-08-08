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
 * @api {get} /cards/new Get Card Create Page
 * @apiName GetCardCreatePage
 * @apiGroup Card
 */
router.get('/new', CardController.getCardCreatePage);

/**
 * @api {get} /cards/:id/edit Get Card Edit Page
 * @apiName GetCardEditPage
 * @apiGroup Card
 *
 * @apiParam {String} id Card unique id
 */
router.get('/:id/edit', CardController.getCardEditPage);

/**
 * @api {get} /cards/user/:userId Get User Card Page
 * @apiName GetUserCardPage
 * @apiGroup Card
 *
 * @apiParam {String} userId User unique id
 */
router.get('/user/:userId', CardController.getUserCardPage);

/**
 * @api {post} /cards Post Card
 * @apiName PostCard
 * @apiGroup Card
 *
 * @apiParam {String} cardTypeId Card type id
 * @apiParam {String} font Font
 * @apiParam {String} img Img
 * @apiParam {String} content Content
 * @apiParam {String} source Source
 *
 * @apiSuccess {Object} card Card object
 */
router.post('/', CardController.postCard);

/**
 * @api {delete} /cards/:id
 * @apiName DeleteCard
 * @apiGroup Card
 *
 * @apiParam {String} id Card unique id
 */
router.delete('/:id', CardController.deleteCardById);

module.exports = router;
