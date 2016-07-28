var User = require('../models/user');
var bcrypt = require('bcrypt');

function UserController() {

}

UserController.getUserPageById = function(req, res, next) {
  
  User.getById(req.params, function(err, result){

	 	if(err) res.send(err);
	 	else res.render('user-page',result);
  
  });
 
};

UserController.postLogin = function(req, res, next) {
  
  User.getByEmail(req.body, function(err, result){

  	if(err) res.send(err);
  	else {
			bcrypt.compare(req.body.password, result.password, function(err, result) {
  			res.send({'result':result});
			});
		}
  });

};

UserController.postJoin = function(req, res, next) {

	User.create(req.body, function(err, result){

		if(err) res.send(err);
		else res.send(result);
		
	});
};

module.exports = UserController;
