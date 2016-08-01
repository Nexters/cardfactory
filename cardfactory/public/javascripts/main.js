//main.js
define([
  './bower_components/jquery/dist/jquery',
  './controllers/login-controller',
  './views/login-view'
], function (
  $,
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