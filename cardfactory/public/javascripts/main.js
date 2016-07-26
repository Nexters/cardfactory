//main.js
define([
  './bower_components/bootstrap/dist/js/bootstrap',
  './controllers/login-controller',
  './views/login-view'
], function (
  Bootstrap,
  LoginController,
  LoginView
) {
  'use strict';

  function MainPage() {
    this.view = new LoginView();
    this.controller = new LoginController(this.view);
  }

  return new MainPage();
});