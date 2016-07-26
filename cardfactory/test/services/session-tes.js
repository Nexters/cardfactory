var expect = require('chai').expect;
var Session = require('../../services/session');

describe('Session', function() {
  describe('#hasSession', function() {
    it('should get false when req.session is not exist.', function() {
      var req = {};
      expect(Session.hasSession(req)).to.equal(false);
    });

    it('should get true when req.session.id is exist.', function() {
      var req = {
        session: {
          id: 1
        }
      };
      expect(Session.hasSession(req)).to.equal(true);
    });
  });

  describe('#getSession', function() {
    it('should get session data.', function() {
      var req = {
        session: {
          id: 1,
          nickname: 'abc123'
        }
      };
      expect(Session.getSession(req)).to.eql({
        id: 1,
        nickname: 'abc123'
      });
    });
  });

  describe('#getSessionId', function() {
    it('should get session id.', function() {
      var req = {
        session: {
          id: 1,
          nickname: 'abc123'
        }
      };
      expect(Session.getSessionId(req)).to.equal(1);
    });
  });

  describe('#registerSession', function() {
    it('should register session.', function() {
      var req = {
        session: {}
      };
      var user = {
        id: 2,
        nickname: 'def456'
      };
      Session.registerSession(req, user);
      expect(req.session).to.eql({
        id: 2,
        nickname: 'def456'
      });
    });
  });

  describe('#destroySession', function() {
    it('should destroy session.', function() {
      var req = {
        session: {
          id: 1,
          nickname: 'abc123',
          destroy: function() {
            delete this.id;
            delete this.nickname;
            delete this.destroy;
          }
        }
      };
      Session.destroySession(req);
      expect(req.session).to.eql({});
    });
  });

});