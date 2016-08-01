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
        userId: '1',
        cardTypeId: '1'
      };
      //when
      Card.create(card, function(err, result) {
        //then
        expect(err).to.not.exist;
        expect(result.userId).to.eql(1);
        expect(result.cardTypeId).to.eql(1);
        expect(result.content).to.eql('textcontent');
        expect(result.font).to.eql('Nanum Gothic');
        expect(result.img).to.eql('testimg');
        expect(result.source).to.eql('testsource');
        expect(result.hitsCount).to.equal(0);
        expect(result.likesCount).to.equal(0);
        expect(result.createdDate).to.exist;
        expect(result.updatedDate).to.exist;
        done();
      });

    });
  });
});