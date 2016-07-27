var express = require('express');
var router = express.Router();
var ImageController = require('../controllers/image');

router.get('/:name', ImageController.getImage);

router.post('/upload', ImageController.checkFileSize, ImageController.upload);

module.exports = router;
