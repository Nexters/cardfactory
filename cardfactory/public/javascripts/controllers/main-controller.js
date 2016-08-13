//main-controller.js
define([
  '../utils/http-util'
], function (
  HttpUtil
) {
  'use strict';

  function MainController(view) {
    var self = this;
    self.view = view;

    self.view.bind('join', function() {
      self.join();
    });

    self.view.bind('login', function(data) {
      self.login(data);
    });
  }

  MainController.prototype.join = function(data) {
    var self = this;
    location.href='/join';
    
  };

  MainController.prototype.login = function(data) {
    console.log(data);
    var self = this;    
    location.href='/login';

  };

  return MainController;
});