var User = require('../models/user');

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
  		// 비밀번호 체크
  		if( result.password === req.body.password ){
  			res.send({'result':true});
  		}else{
  			res.send({'result':false});
  		}

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
