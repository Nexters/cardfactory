var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user');

/* GET user page */
router.get('/:id', UserController.getUserPageById);

router.post('/login', UserController.postLogin);

router.post('/join', UserController.postJoin);

module.exports = router;
