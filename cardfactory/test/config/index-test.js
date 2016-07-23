var expect = require('chai').expect;
var config = require('../../config/index');

function reloadConfig(){
  delete require.cache[require.resolve('../../config/index')];
  return require('../../config/index');
}

describe('config',function() {
  describe('#constructor', function() {
    it('should get config env.', function() {
      process.env.NODE_ENV = null;
      config = reloadConfig();
      expect(config.env).to.equal('development');
    });

    it('should get config env.', function() {
      process.env.NODE_ENV = 'development';
      config = reloadConfig();
      expect(config.env).to.equal('development');
    });
  });

  describe('#isDev', function() {
    it('should get true when NODE_ENV is development.', function() {
      process.env.NODE_ENV = 'development';
      expect(config.isDev()).to.equal(true);
    });
  });


});