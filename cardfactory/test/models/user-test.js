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
  describe('#getByEmail', function(){
    it('should get user data by email', function(done){
      User.getByEmail({'email': 'test@test.com'}, function(err, result){
        expect(err).to.not.exist;
        expect(result.id).to.equal(1);
        done();
      });
    })
  });
  describe('#create', function(){
    it('should create a user', function(done){
      User.create({'nickname':'testNickname2','email':'test2@test.com','password':'test2'},function(err,result){
        expect(err).to.not.exist;
        expect(result).to.not.be.null;
        done();
      });
    })
  });
});