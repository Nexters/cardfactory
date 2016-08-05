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
    this.$emailInput = $('#email_input');
    this.$pwInput = $('#pw_input');
    this.$emailError=$('#email_error');
    this.$pwError=$('#pw_error');
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
          email: self.$emailInput.val(),
          pw: self.$pwInput.val()
        };
        handler(data);
      });
    }
  };

  LoginView.prototype.showError = function(err, type) {
    var self=this;
      if(type==="email")
        self.$emailError.text(err);
      if(type==="pw")
        self.$pwError.text(err);
  };

  return LoginView;
});