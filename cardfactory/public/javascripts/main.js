//main.js
define([
  './views/main-view'
], function (
  MainView
) {
  'use strict';

  function MainPage() {
    this.view = new MainView();
  }

  return new MainPage();
});