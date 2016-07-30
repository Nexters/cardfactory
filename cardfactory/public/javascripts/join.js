//join.js
define([
	'./bower_components/bootstrap/dist/js/bootstrap',
	'./controllers/join-controller',
	'./views/join-view'
], function (
	Bootstrap,
	JoinView
	JoinController
) {
  'use strict';

  function JoinPage() {
  	this.view = new Joinview();
  	this.controller = new JoinController(this.view);
  	console.log("Join!!");
  }

  return new JoinPage();
});