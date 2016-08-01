var expect = require('chai').expect;
var DbHelper = require('../helper/db-helper');
var Card = require('../../models/card');

describe('Card', function() {
  before(function(done) {
    DbHelper.clearAndInsert(function(err) {
      expect(err).to.not.exist;
      done();
    });
  });

  describe('#get', function() {
    it('should get card data.', function(done) {
      Card.get({}, function(err, result) {
        expect(err).to.not.exist;
        expect(result.length).to.equal(1);
        done();
      });
    });
  });

  describe('#create', function() {
    it('should create card.', function(done) {
      //given
      var card = {
        img: 'testimg',
        source: 'testsource',
        font: 'Nanum Gothic',
        content: 'textcontent',
        userId: 'testuser',
        cardTypeId: '1'
      };
      //when
      Card.create(card, function(err, result) {
        //then

      });

    });
  });
});