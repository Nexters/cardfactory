//main.js
define([
  './bower_components/jquery/dist/jquery',
  './controllers/login-controller',
  './views/login-view',
  './utils/http-util'
], function (
  $,
  LoginController,
  LoginView,
  HttpUtil
) {
  'use strict';

  function MainPage() {
    alert("MAIN");
    this.view = new LoginView();
    this.controller = new LoginController(this.view);

    HttpUtil.getData('/testerror', function(err, data) {
      console.log(err);

      console.log(data);
    });

  }

  return new MainPage();
});