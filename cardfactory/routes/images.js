var express = require('express');
var router = express.Router();
var ImageController = require('../controllers/image');

/**
 * @api {get} /images/:name Get Image
 * @apiName GetImage
 * @apiGroup Image
 *
 * @apiParam {String} name Image name
 */
router.get('/:name', ImageController.getImage);

/**
 * @api {get} /images/upload Post Image
 * @apiName PostImage
 * @apiGroup Image
 */
router.post('/upload', ImageController.checkFileSize, ImageController.upload);

module.exports = router;
