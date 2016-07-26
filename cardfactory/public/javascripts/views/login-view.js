//card-view.js
define([
  '../bower_components/jquery/dist/jquery'
], function (
  $
) {
  'use strict';

  function LoginView() {
    this.$container = $('#container');
    this.$joinBtn = $('#join_btn');
    this.$loginBtn = $('#login_btn');
    this.$idInput = $('#id_input');
    this.$pwInput = $('#pw_input');
  }

  LoginView.prototype.bind = function(event, handler) {
    var self = this;
    if (event === 'join') {
      self.$joinBtn.click(function() {
        handler();
      });
    }
    if (event === 'login') {
      self.$loginBtn.click(function() {
        // TODO: 데이터 가져오기
        var data = {
          id: self.$idInput.val(),
          pw: self.$pwInput.val()
        };
        handler(data);
      });
    }
  };

  return LoginView;
});