//card-controller.js
define([
], function (
) {
  'use strict';

  function CardController(model, view) {
    var self = this;
    self.model = model;
    self.view = view;

    self.view.render('draw', model);
    self.bindHandlers();
  }

  CardController.prototype.bindHandlers = function() {
    var self = this;
    self.view.bind('saveCard', function(data) {
      self.addCard(data);
    });
  };

  CardController.prototype.addCard = function(data) {
    var self = this;
    self.model.create(data, function(card) {
      if (card) {
        //TODO: 카드 페이지로 이동
      }
    });
  };

  return CardController;
});