//card-view.js
define([
  '../bower_components/jquery/dist/jquery'
], function (
  $
) {
  'use strict';

  function MainView() {
    this.$container = $('#container');
    this.$join = $('#join');
    this.$login = $('#login');
  }

  CardView.prototype.bind = function(event, handler) {
    var self = this;
    if (event === 'join') {
      self.$join.click(function() {
        // TODO: 데이터 가져오기
        var data = {

        };
        handler(data);
      });
    }
    if (event === 'login') {
      self.$login.click(function() {
        // TODO: 데이터 가져오기
        var data = {

        };
        handler(data);
      });
    }
  };

  return CardView;
});