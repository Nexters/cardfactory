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
    var self = this; 
    var errorStatus=true;
    //Email
    var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
    if(data['email']== ""){
      var err="빈칸을 입력하세요!"; 
      var type="email";
      self.view.showError(err,type);
      errorStatus=false;
    }
    if(!data['email'].match(regExp))
    {
      var err="형식이 올바르지 않습니다.";
      var type="email"; 
      self.view.showError(err,type);
      errorStatus=false;
    }

    //Nickname
     if(data['nickname']==""){
      var err="빈칸을 입력하세요!";
      var type="nickname";
      self.view.showError(err,type);
      errorStatus=false;
    }

    if(data['nickname'].length<3 || data['nickname'].length>12){
      var err="길이는 3~12자여야 합니다.";
      var type="nickname";
      self.view.showError(err,type);
      errorStatus=false;
    }

    //PW
    if(data['pw']==""){
      var err="빈칸을 입력하세요!";
      var type="pw";
      self.view.showError(err,type);
      errorStatus=false;
    }
    if(data['pw'].length<6 || data['pw'].length>50){
      var err="길이가 6자 이상이여야 합니다.";
      var type="pw";
      self.view.showError(err,type);
      errorStatus=false;
    }
    if(data['pw']!=data['pw_confirm']){
      var err="password가 일치하지 않습니다.";
      var type="pw_confirm";
      self.view.showError(err,type);
      errorStatus=false;
    }
    return errorStatus;
  };

  JoinController.prototype.postJoin = function(data) {
    // TODO: 회원가입 처리
    var _data={
      nickname : data['nickname'],
      email : data['email'],
      password : data['pw']
    };
    HttpUtil.postData('/users/join',_data,function(err, result) {
      if(err)
      {
        alert(err);
      }
      console.log(result);
    });
    //에러 처리 
    //self.view.showError(err);
  };

  JoinController.prototype.join = function(data) {
    console.log(data);
    var self = this;    
    if (self.validate(data)) {
      //console.log("successful!");
      self.postJoin(data);
      // TODO: 회원가입 요청
    }
  };

  return JoinController;
});