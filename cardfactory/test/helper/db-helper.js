process.env.NODE_ENV = 'test';

function reloadModules() {
  delete require.cache[require.resolve('../../config/index')];
  delete require.cache[require.resolve('../../db/db')];
}
reloadModules();

var async = require('async');
var pool = require('../../db/db').pool;

module.exports = {
  clear: function(finalCallback) {
    async.series([
      function(callback) {
        var query = "delete from card where id > 0;";
        pool.query(query, function(err, result) {
          callback(err, result);
        });
      },
      function(callback) {
        var query = "delete from user where id > 0;";
        pool.query(query, function(err, result) {
          callback(err, result);
        });
      },
      function(callback) {
        var query = "delete from card_type where id > 0;";
        pool.query(query, function(err, result) {
          callback(err, result);
        });
      }
    ], function(err, results) {
      finalCallback(err, results);
    });
  },
  insert: function(finalCallback) {
    async.series([
      function(callback) {
        var query = "insert into user (id, nickname, email, password) values (1, 'testNickname', 'test@test.com', 'test')";
        pool.query(query, function(err, result) {
          callback(err, result);
        });
      },
      function(callback) {
        var query = "insert into card_type (id, defaultHtml,thumbnailHtml,name) values (1, '<div>defaultHtml</div>','<div>defaultImg</div>', 'defaultName')";
        pool.query(query, function(err, result) {
          callback(err, result);
        });
      },
      function(callback) {
        var query = "insert into card (html, hitsCount, likesCount, userId, cardTypeId) values ('<div>testHtml</div>',1,1,1,1)";
        pool.query(query, function(err, result) {
          callback(err, result);
        });
      }
    ], function(err, results) {
      finalCallback(err, results);
    });
  }
};


