//main-view.js
define([
  '../bower_components/jquery/dist/jquery'
], function (
  $
) {
  'use strict';

  function MainView() {
    this.$container = $('#container');
    this.$joinBtn = $('#join_btn');
    this.$loginBtn = $('#login_btn');
  }

  MainView.prototype.bind = function(event, handler) {
    var self = this;
    if (event === 'join') {
      self.$joinBtn.click(function() {
        handler();
      });
    }
    if (event === 'login') {
      var self = this;
      self.$loginBtn.click(function() {
        handler();
      });
    }
  };

  

  return MainView;
});