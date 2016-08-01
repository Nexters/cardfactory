//join-controller.js
define([
  '../utils/http-util'
], function (
  HttpUtil
) {
  'use strict';

  function JoinController(view) {
    var self = this;
    self.view = view;

    self.view.bind('join', function(data) {
      self.join(data);
    });


  }

  JoinController.prototype.validate = function(data) {
    //TODO: 데이터 정합성 검사
    //alert()

    //return false;
    //return true;
  };

  JoinController.prototype.postJoin = function(data) {
    // TODO: 회원가입 처리
    //HttpUtil.postData()
    //에러 처리 self.view.showError(err)
  };

  JoinController.prototype.join = function(data) {
    var self = this;
    if (self.validate(data)) {
      // TODO: 회원가입 요청
    }
  };

  return JoinController;
});