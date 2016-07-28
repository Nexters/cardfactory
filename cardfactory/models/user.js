var _ = require('underscore');
var pool = require('../db/db').pool;

function User() {

}

/**
 * Validate
 *
 * @param {Object} params
 * @param {String} params.id
 * @param {String} params.nickname
 * @param {String} params.email
 * @param {String} params.password
 * @returns {*}
 */
User.validate = function(params) {

  var error = null;

  if (!_.isString(params.email)) {
    error = { msg : 'email error' };
  } 

  return error;
};

// Get user
User.get = function(params, finalCallback) {
  var query = "SELECT * FROM user;";

  pool.query(query, function (err, result) {
    finalCallback(err, result);
  });
};

// Get user by id
User.getById = function(params, finalCallback) {

  var query = "SELECT * FROM user WHERE id = ?;";
  
  pool.getConnection(function(err, connection) {
     
	connection.query( query, [params.id], function(err, rows) {
	
	  finalCallback(err, rows[0]);
	  connection.release();
	
	});

  });

};

// Get user by email
User.getByEmail = function(params, finalCallback) {
  
  var query = "SELECT * FROM user WHERE email = ?;";

  pool.getConnection(function(err, connection){
    
    connection.query( query, [params.email], function(err, rows){

      finalCallback(err, rows[0]);
      connection.release();

    });

  });
};

// Create new user
User.create = function(params, finalCallback) {
  
  var query = "INSERT INTO user (nickname, email, password) VALUES (?,?,?);";

  pool.getConnection(function(err, connection){
    
    connection.query( query, [params.nickname, params.email, params.password], function(err, rows){
      /*
       correct response
       {
          "fieldCount": 0,
          "affectedRows": 1,
          "insertId": 24,
          "serverStatus": 2,
          "warningCount": 0,
          "message": "",
          "protocol41": true,
          "changedRows": 0
        }
      */
      finalCallback(err, rows);
      connection.release();

    });

  });

};

// Update user
User.update = function(params, finalCallback) {

};

module.exports = User;
