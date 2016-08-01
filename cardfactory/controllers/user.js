var User = require('../models/user');
var bcrypt = require('bcrypt');
var session = require('../services/session');

function UserController() {

}

UserController.getUserPageById = function(req, res, next) {
  
  User.getById(req.params, function(err, result){

	 	if(err) res.status(400).send("NO_MATCH_USER");
	 	else res.render('user-page',result);
  
  });
 
};

UserController.postLogin = function(req, res, next) {

  User.getByEmail(req.body, function(err, result){

  	if(err) res.send(err);
  	else {
			bcrypt.compare(req.body.password, result.password, function(err, result) {
				if(err) res.status(400).send("PASSWORD_ENCRYPT_ERROR");
				else if(!result) res.status(400).send("PASSWORD_NOT_MATCHED");
				else{
					session.registerSession(req, result);
					res.status(200).send("SUCCESS");
				} 
  		});
		}
  });

};

UserController.postJoin = function(req, res, next) {

	User.create(req.body, function(err, result){

		if(err) res.status(400).send("CANNOT_CREATE_USER");
		else res.status(200).send("SUCCESS");
		
	});
};

UserController.getLogout = function(req, res, next){

	if(session.hasSession(req)) {
		session.destroySession(req);
		res.status(200).send("SUCCESS");
	}
	else res.status(400).send("NO_SESSION");
}
module.exports = UserController;
