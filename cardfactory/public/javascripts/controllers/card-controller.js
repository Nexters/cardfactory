//card-controller.js
define([
], function (
) {
  'use strict';

  function CardController(model, view) {
    var self = this;
    self.model = model;
    self.view = view;

    self.view.bind('saveCard', function(data) {
      self.addCard(data);
    });
  }

  CardController.prototype.addCard = function(data) {
    var self = this;
    self.model.create(data, function(card) {
      if (card) {
        self.view.render('showCard', card);
      }
    });
  };

  return CardController;
});