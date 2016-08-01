var _ = require('underscore');
var pool = require('../db/db').pool;
var bcrypt = require('bcrypt');
var async = require('async');

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

// Get user by id
User.getById = function(params, finalCallback) {

  var query = "SELECT * FROM user WHERE id = ?;";
  
  async.waterfall([
    function(callback){ 
    
      pool.getConnection(function(err, connection){
        if(err) callback(err);
        else    callback(null, connection);
      });
    
    },
    function( connection, callback){

      connection.query( query, [params.id], function(err, rows) {
        if(err) callback(err);
        else    callback(null, rows[0]);
        connection.release();
      });

    }
  ], function(err, row){
    if(err) finalCallback(err, null);
    else    finalCallback(err, row);
  });


};

// Get user by email
User.getByEmail = function(params, finalCallback) {
  
  var query = "SELECT * FROM user WHERE email = ?;";

  async.waterfall([
    function(callback){ 
    
      pool.getConnection(function(err, connection){
        if(err) callback(err);
        else    callback(null, connection);
      });
    
    },
    function( connection, callback){

      connection.query( query, [params.email], function(err, rows) {
        if(err) callback(err);
        else    callback(null, rows[0]);
        connection.release();
      });

    }
  ], function(err, row){
    if(err) finalCallback(err, null);
    else    finalCallback(err, row);
  });

};

// Create new user
User.create = function(params, finalCallback) {
  
  var query = "INSERT INTO user (nickname, email, password) VALUES (?,?,?);";

  async.waterfall([
    function(callback){ 
    
      pool.getConnection(function(err, connection){
        if(err) callback(err);
        else    callback(null, connection);
      });
    
    },
    function(connection, callback){
      bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(params.password, salt, function(err, hash){
          if(err) callback(err);
          else    callback(null, connection, hash);
        });
        if(err) callback(err);
      })
    },
    function( connection, hash, callback){

      connection.query( query, [params.nickname, params.email, hash], function(err, rows) {
        if(err) callback(err);
        else    callback(null, rows);
        connection.release();
      });

    }
  ], function(err, rows){
    if(err) finalCallback(err, null);
    else    finalCallback(err, rows);
  });

};
// Update user
User.update = function(params, finalCallback) {

};

module.exports = User;
