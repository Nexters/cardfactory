var _ = require('underscore');
var pool = require('../db/db').pool;

function Card() {

}

/**
 * Validate
 *
 * @param {Object} params
 * @param {String} params.html
 * @returns {*}
 */
Card.validate = function(params) {
  var error = null;

  if (!_.isString(params.html)) {
    error = { msg: 'Html is not string.' };
  }

  return error;
};

Card.get = function(params, finalCallback) {
  var query = "SELECT * FROM card";

  pool.query(query, function (err, result) {
    finalCallback(err, result);
  });
};

Card.getById = function(params, finalCallback) {
  // TODO: id로 카드 가져와야함!
};

// Create new card
Card.create = function(params, finalCallback) {

};

// Update card
Card.update = function(params, finalCallback) {

};

// Delete card
Card.delete = function(params, finalCallback) {

};

module.exports = Card;
