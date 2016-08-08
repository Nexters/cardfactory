//card-edit.js
define([
  './models/card',
  './templates/card-template',
  './views/card-view',
  './controllers/card-controller'
], function (
  Card,
  CardTemplate,
  CardView,
  CardController
) {
  'use strict';

  var defaultImage = '/images/test.png';

  function CardEditPage() {
    this.model = new Card({
      img: defaultImage
    });
    this.template = new CardTemplate();
    this.view = new CardView(this.template);
    this.controller = new CardController(this.model, this.view);
  }

  return new CardEditPage();
});