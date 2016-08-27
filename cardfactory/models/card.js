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
 * @param {Number} params.fontSize
 * @param {Number} params.brightness
 * @param {String} params.font
 * @param {String} params.img
 * @param {String} params.content
 * @param {String} params.source
 *
 * @returns {*}
 */
Card.validate = function(params) {
  if (!validator.isInt(params.userId.toString())) {
    return 'userId error';
  }
  if (!validator.isInt(params.cardTypeId.toString())) {
    return 'cardTypeId error';
  }
  if (!validator.isInt(params.fontSize.toString())) {
    return 'fontSize error';
  }
  if (!validator.isInt(params.brightness.toString())) {
    return 'brightness error';
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
/*
 카드를 일정 수만 가져오도록 코딩할 것.
 params.pageNum = 1; 
 params.perPage = 20;
*/
Card.get = function(params, finalCallback) {

  var query = "SELECT * FROM card ORDER BY updatedDate DESC LIMIT ?,?";

  async.waterfall([
    function(callback){

      pool.getConnection(function(err, connection){
        if(err) callback(err);
        else    callback(null, connection);
      });
    },
    function(connection, callback){

      connection.query( query, [params.pageNum * params.perPage, params.perPage], function(err, rows){
        if(err) callback(err);
        else    callback(null, rows);
        connection.release();
      });
    }
    ], function(err, rows){
      console.log(err);
      if(err) finalCallback(err, null);
      else    finalCallback(err, rows);
    });

};

// Get card by Id
Card.getById = function(params, finalCallback) {
  var query = "SELECT card.*, user.nickname FROM card, user WHERE card.id = ? && card.userId = user.id;";

  async.waterfall([
    function(callback){

      pool.getConnection(function(err, connection){
        if(err) callback(err);
        else    callback(null, connection);
      });
    },
    function(connection, callback){

      connection.query( query, [params.id], function(err, rows){
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


// Count card by userId
Card.countUserCard = function(params, finalCallback) {
  

  async.waterfall([
    function(callback){

      pool.getConnection(function(err, connection){
        if(err) callback(err);
        else    callback(null, connection);
      });
    },
    function(connection, callback){
      console.log("hello");
      var query = 'SELECT COUNT(*) AS CardCount FROM card WHERE userId = ?';
      //CardCount은 user가 만든 카드의 수
      connection.query( query,[params.CardCount], function(err, rows){
        if(err) callback(err);
        else    callback(null, rows);
        connection.release();
      });
    }
    ], function(err, row){
      if(err) finalCallback(err, null);
      else    finalCallback(err, row);
    });

};


Card.countUserCard = function(params, finalCallback) {

async.waterfall([
    function(callback){

      pool.getConnection(function(err, connection){
        if(err) callback(err);
        else    callback(null, connection);
      });
    },


    function(connection, callback){
      var query = "SELECT COUNT(*) FROM card WHERE userId = ?";

      connection.query( query, [params.userId], function(err, rows){
        console.log(rows);
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

// Get card by Id Order by UpdatedDate
Card.getUserCard = function(params, finalCallback) {

  async.waterfall([
    function(callback){

      pool.getConnection(function(err, connection){
        if(err) callback(err);
        else    callback(null, connection);
      });
    },


    function(connection, callback){
      var query = "SELECT * FROM card WHERE userId = ? ORDER BY updatedDate DESC LIMIT ?,?;";
      // params.userId 가 유저의 id
      connection.query( query, [params.userId, params.pageNum * params.perPage, params.perPage], function(err, rows){
        console.log(rows);
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


// Create new 
Card.create = function(params, finalCallback ){
  var error = this.validate(params);
  if (error) {
    return finalCallback(error);
  }
  async.waterfall([
    function(callback) {
      var query = "INSERT INTO card (img, source, font, fontSize, brightness, content, userId, cardTypeId) VALUES (?,?,?,?,?,?,?,?);";
      var insertItem = [
        params.img,
        params.source,
        params.font,
        params.fontSize,
        params.brightness,
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
