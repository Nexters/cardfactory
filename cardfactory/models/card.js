var pool = require('../db/db').pool;

// Create new card
exports.create = function(params, finalCallback) {

};

// Get cards
exports.get = function(params, finalCallback) {
  var query = "SELECT * FROM card";

  pool.query(query, function (err, result) {
    finalCallback(err, result);
  });
};

// Update card
exports.update = function(params, finalCallback) {

};

// Delete card
exports.delete = function(params, finalCallback) {

};