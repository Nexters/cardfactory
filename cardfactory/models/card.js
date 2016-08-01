var _ = require('underscore');
var async = require('async');
var validator = require('validator');

var pool = require('../db/db').pool;

function Card() {

}

/**
 * Validate
 *
 * @param {Object} params
 * @param {Number} params.userId
 * @param {Number} params.cardTypeId
 * @param {String} params.font
 * @param {String} params.img
 * @param {String} params.content
 * @param {String} params.source
 *
 * @returns {*}
 */
Card.validate = function(params) {
  if (!validator.isInt(params.userId)) {
    return 'userId error';
  }
  if (!validator.isInt(params.cardTypeId)) {
    return 'cardTypeId error';
  }
  if (!_.isString(params.font)) {
    return 'font error';
  }
  if (!_.isString(params.img)) {
    return 'img error';
  }
  if (!_.isString(params.content)) {
    return 'content error';
  }
  if (!_.isString(params.source)) {
    return 'source error';
  }
  return false;
};

// Get card
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
  var error = this.validate(params);
  if (error) {
    return finalCallback(error);
  }
  async.waterfall([
    function(callback) {
      var query = "INSERT INTO card (img, source, font, content, userId, cardTypeId) VALUES (?,?,?,?,?,?);";
      var insertItem = [
        params.img,
        params.source,
        params.font,
        params.content,
        params.userId,
        params.cardTypeId
      ];
      pool.query(query, insertItem, function(err, result) {
        callback(err, result);
      });
    },
    function(result, callback) {
      var insertId = result.insertId;
      var query = "SELECT * FROM card WHERE id = ?;";
      pool.query(query, [insertId], function(err, rows) {
        callback(err, rows[0]);
      });
    }
  ], function (err, result) {
    finalCallback(err, result);
  });
};

// Delete card
Card.deleteById = function(params, finalCallback) {
  var query = "DELETE from card where id=? AND userId=?";
  pool.query(query, [params.id, params.userId], function(err, result) {
    finalCallback(err, result);
  });
};

module.exports = Card;
