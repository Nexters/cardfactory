var express = require('express');
var router = express.Router();
var ResourceController = require('../controllers/resource');

/**
 * @api {get} /images/:name Get Image
 * @apiName GetImage
 * @apiGroup Image
 *
 * @apiParam {String} name Image name
 */
router.get('/image/:id', ResourceController.getImage);

module.exports = router;
