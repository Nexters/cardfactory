//card-controller.js
define([
], function (
) {
  'use strict';

  function CardController(model, view) {
    var self = this;
    self.model = model;
    self.view = view;

    self.view.render('draw', self.model);
    self.view.render('drawMenu', { menu: 'image' });
    self.bindHandlers();
  }

  CardController.prototype.bindHandlers = function() {
    var self = this;
    self.view.bind('saveCard', function(data) {
      self.addCard(data);
    });

    self.view.bind('changeMenu', function(data) {
      self.view.render('drawMenu', { menu: data });
    });

    self.view.bind('imgUpload', function(data) {
      self.model.img = data;
      self.view.render('draw', self.model);
    });

    self.view.bind('changeImage', function(data) {
      self.model.img = data;
      self.view.render('draw', self.model);
    });

    self.view.bind('changeFont', function(data) {
      self.model.img = data;
      self.view.render('draw', self.model);
    });

    self.view.bind('changeFontSize', function(data) {
      self.model.img = data;
      self.view.render('draw', self.model);
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