var _ = require('underscore');
var pool = require('../db/db').pool;

function User() {

}

/**
 * Validate
 *
 * @param {Object} params
 * @param {String} params.html
 * @returns {*}
 */
User.validate = function(params) {
  var error = null;

  if (!_.isString(params.html)) {
    error = { msg: 'Html is not string.' };
  }

  return error;
};

// Get user
User.get = function(params, finalCallback) {
  var query = "SELECT * FROM user";

  pool.query(query, function (err, result) {
    finalCallback(err, result);
  });
};


// Create new user
User.create = function(params, finalCallback) {

};

// Update user
User.update = function(params, finalCallback) {

};

module.exports = User;
