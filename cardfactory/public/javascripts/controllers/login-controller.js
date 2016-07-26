//login-controller.js
define([
], function (
) {
  'use strict';

  function LoginController(view) {
    var self = this;
    self.view = view;

    self.view.bind('join', function() {
      self.join();
    });

    self.view.bind('login', function(data) {
      self.login(data);
    });
  }

  LoginController.prototype.join = function() {
    
  };

  LoginController.prototype.login = function(data) {
    var self = this;
    //TODO: 로그인 코드 처리
    console.log(data);
  };

  return LoginController;
});