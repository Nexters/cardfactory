var User = require('../models/user');
var bcrypt = require('bcrypt');
var session = require('../services/session');

function UserController() {

}

UserController.getUserPageById = function(req, res, next) {
  
  User.getById(session.getSessionId(), function(err, result){

	 	if(err) res.status(400).send({msg:"NO_MATCH_USER"});
	 	else res.render('user-page',result);
  
  });
 
};

UserController.postLogin = function(req, res, next) {

  User.getByEmail(req.body, function(err, result){
  	if(err) res.send(err);
  	else {
			bcrypt.compare(req.body.password, result.password, function(err, isEqual) {
				if(err) res.status(400).send({msg:"PASSWORD_ENCRYPT_ERROR"});
				else if(!isEqual) res.status(400).send({msg:"PASSWORD_NOT_MATCHED"});
				else{
					result.userId = result.id;
					session.registerSession(req, result);
					console.log('result');
					console.log(result);

					res.status(200).send({ msg : "SUCCESS"});
				} 
  		});
		}
  });

};

UserController.postJoin = function(req, res, next) {

	User.create(req.body, function(err, result){
		if(err) res.status(400).send({msg:"CANNOT_CREATE_USER"});
		else res.status(200).send({msg:"SUCCESS"});

		
	});
};

UserController.putUser = function(req, res, next){

	req.body.id = session.getSessionId(req);
	User.update(req.body, function(err, result){
		if(err) res.status(400).send({msg:"INVALID_USER_UPDATE"});
		else res.status(200).send({msg:"SUCCESS"});
	});
}


UserController.getLogout = function(req, res, next){

	if(session.hasSession(req)) {
		session.destroySession(req);
		res.status(200).send({msg:"SUCCESS"});
	}
	else res.status(400).send({msg:"NO_SESSION"});
}
module.exports = UserController;
