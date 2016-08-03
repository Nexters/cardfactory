var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user');

/**
 * @api {get} /users Get user page
 * @apiName GetUserPage
 * @apiGroup User
 *
 * @apiParam {String} id User unique id
 */
router.get('/:id', UserController.getUserPageById);

/**
 * @api {post} /users Login
 * @apiName PostLogin
 * @apiGroup User
 *
 * @apiParam {String} email User email
 * @apiParam {String} password User User password
 */
router.post('/login', UserController.postLogin);

/**
 * @api {post} /users join
 * @apiName UserJoin
 * @apiGroup User
 *
 * @apiParam {String} nickname User nickname
 * @apiParam {String} email User email
 * @apiParam {String} password User User password
 */
router.post('/join', UserController.postJoin);

/**
 * @api {put} /users update user
 * @apiName PutUser
 * @apiGroup User
 *
 * @apiParam {String} nickname User nickname
 * @apiParam {String} email User email
 * @apiParam {String} password User User new password
 */
router.put('/:id', UserController.putUser);

/**
 * @api {get} /users logout
 * @apiName UserLogout
 * @apiGroup User
 *
 */
router.post('/logout', UserController.getLogout);



module.exports = router;
