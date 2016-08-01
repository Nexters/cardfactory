process.env.NODE_ENV = 'test';

function reloadModules() {
  delete require.cache[require.resolve('../../config/index')];
  delete require.cache[require.resolve('../../db/db')];
}
reloadModules();

var async = require('async');
var pool = require('../../db/db').pool;

module.exports = {
  clearAndInsert: function(finalCallback) {
    var self = this;
    async.series([
      function(callback) {
        self.clear(callback)
      },
      function(callback) {
        self.insert(callback);
      }
    ], function(err) {
      finalCallback(err);
    });
  },
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
        var query = "insert into card_type (id, name, defaultImg, defaultFont) values (1, 'cardname','defaultImg', 'defaultFont')";
        pool.query(query, function(err, result) {
          callback(err, result);
        });
      },
      function(callback) {
        var query = "insert into card (id, img, source, font, content, hitsCount, likesCount, userId, cardTypeId) values (1, 'testImg', 'testSource', 'testFont', 'testContent', 1, 1, 1, 1)";
        pool.query(query, function(err, result) {
          callback(err, result);
        });
      }
    ], function(err, results) {
      finalCallback(err, results);
    });
  }
};


