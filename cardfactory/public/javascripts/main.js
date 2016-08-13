//main.js
define([
  './bower_components/jquery/dist/jquery',
  './controllers/main-controller',
  './views/main-view'
], function (
  $,
  MainController,
  MainView
) {
  'use strict';

  function MainPage() {
    this.view = new MainView();
    this.controller = new MainController(this.view);
  }

  return new MainPage();
});