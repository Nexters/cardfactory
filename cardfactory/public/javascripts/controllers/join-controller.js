//join-controller.js
define([
], function (
) {
  'use strict';

  function JoinController(view) {
    var self = this;
    self.view = view;

    self.view.bind('join', function(data) {
      self.join(data);
    });

  }

  JoinController.prototype.join = function(data) {
    var self = this;
    console.log(data);
    alert(data);
    
  };

  return JoinController;
});