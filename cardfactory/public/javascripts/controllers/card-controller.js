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
    self.view.render('drawMenu', {});
    self.bindHandlers();
  }

  CardController.prototype.bindHandlers = function() {
    var self = this;
    self.view.bind('saveCard', function(data) {
      self.addCard(data);
    });

    self.view.bind('changeMenu', function(data) {

    });
  };

  CardController.prototype.addCard = function(data) {
    var self = this;
    self.model.create(data, function(err, card) {
      if (err) {
        return alert(err);
      }
      if (card && card.id) {
        location.href = '/cards/' + card.id;
      }
    });
  };

  return CardController;
});