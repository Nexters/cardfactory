//join-view.js
define([
  '../bower_components/jquery/dist/jquery'
], function (
  $
) {
  'use strict';

  function JoinView() {
    this.$joinBtn = $('#join_btn');
    this.$emailInput = $('#email_input');
    this.$nickInput = $('#nick_input');
    this.$pwInput = $('#pw_input');
    this.$pwConfirmInput= $('#pw_confirm_input');
  } 

  JoinView.prototype.bind = function(event, handler) {
    var self = this;
    if (event === 'join') {
      self.$joinBtn.click(function() {
         var data = {
          email: self.$emailInput.val(),
          nickname: self.$nickInput.val(),
          pw: self.$pwInput.val(),
          pw_confirm: self.$pwConfirmInput.val()
        };
        handler(data);
      });
    }
  };

  JoinView.prototype.showError = function() {

  };

  return JoinView;
});