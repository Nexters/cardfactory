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
    this.$emailInput2 = $('#email_input2');
    this.$nickInput = $('#nick_input');
    this.$pwInput = $('#pw_input');
  } 

  JoinView.prototype.bind = function(event, handler) {
    var self = this;
    if (event === 'join') {
      self.$joinBtn.click(function() {
         var data = {
          email: self.$emailInput.val(),
          nickname: self.$nickInput.val(),
          pw: self.$pwInput.val()
        };
        handler(data);
      });
    }
  };

  return JoinView;
});