var expect = require('chai').expect;
var DbHelper = require('../helper/db-helper');
var User = require('../../models/user');

describe('User', function() {
  before(function(done) {
    DbHelper.clearAndInsert(function(err) {
      expect(err).to.not.exist;
      done();
    });
  });

  describe('#get', function() {
    it('should get user data.', function(done) {
      done();
    });
  });
 
  describe('#getById', function(){
    it('should get user data by id', function(done){
      User.getById({'id':1}, function(err, result){
        expect(err).to.not.exist;
        expect(result.id).to.equal(1);
        done();
      });
    });
  });
});