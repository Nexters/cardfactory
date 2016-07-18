//card-controller.js
define([

], function (

) {
  'use strict';

  function CardController(model, view) {
    var self = this;
    self.model = model;
    self.view = view;
    console.log("DDDD");

    //self.view.bind('newCard', function () {
    //  self.addCard();
    //});
  }

  CardController.prototype.addCard = function() {
    var self = this;
    //self.model.create({}, function () {
    //  self.view.render('newCard');
    //});
  };

  return CardController;
});