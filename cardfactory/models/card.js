var _ = require('underscore');
var async = require('async');

var pool = require('../db/db').pool;

function Card() {

}

/**
 * Validate
 *
 * @param {Object} params
 * @param {String} params.cardTypeId
 * @param {String} params.font
 * @param {String} params.img
 * @param {String} params.content
 * @param {String} params.source
 *
 * @returns {*}
 */
Card.validate = function(params) {
  if (!_.isString(params.cardTypeId)) {
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

  var query = "INSERT INTO card (img, source, font, content, userId, cardTypeId) VALUES (?,?,?,?,?,?);";
  var insertItem = [
    params.img,
    params.source,
    params.font,
    params.content,
    params.userId,
    params.cardTypeId
  ];

  pool.query(query, insertItem, finalCallback);
};

// Update card
Card.update = function(params, finalCallback) {

};

// Delete card
Card.delete = function(params, finalCallback) {

};

module.exports = Card;
