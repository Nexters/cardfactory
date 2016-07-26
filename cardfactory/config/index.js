var _ = require('underscore');
var envConfig;

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
}

try {
  envConfig = require('./env/' + process.env.NODE_ENV + '.js');
} catch(e) {
  envConfig = {};
}
var config = _.extend({}, require('./env/all.js'), envConfig);

/**
 * @returns {Boolean} isDev
 */
config.isDev = function(){
  return this.env === 'development';
};

module.exports = config;