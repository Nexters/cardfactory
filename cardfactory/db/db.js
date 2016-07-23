var mysql = require('mysql');
var config = require('../config/index');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : config.db.host,
  port            : config.db.port,
  user            : config.db.user,
  password        : config.db.password,
  database: 'cardfactory'
});

module.exports = {
  mysql: mysql,
  pool: pool
};