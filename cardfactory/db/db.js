var mysql = require('mysql');
var config = require('../config/index');
var pool = mysql.createPool({
  database        : config.db.database,
  host            : config.db.host,
  port            : config.db.port,
  user            : config.db.user,
  password        : config.db.password,
  connectionLimit : config.db.connectionLimit,
  multipleStatements: config.db.multipleStatements || false
});

module.exports = {
  mysql: mysql,
  pool: pool
};