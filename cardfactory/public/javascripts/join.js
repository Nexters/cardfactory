//join.js
define([
	'./controllers/join-controller',
	'./views/join-view'
], function (
	JoinController,
	JoinView
) {
  'use strict';

  function JoinPage() {
  	this.view = new JoinView();
  	this.controller = new JoinController(this.view);
  }

  return new JoinPage();
});