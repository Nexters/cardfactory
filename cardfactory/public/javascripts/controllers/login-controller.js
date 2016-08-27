//login-controller.js
define([
  '../utils/http-util'
], function (
  HttpUtil
) {
  'use strict';

  function LoginController(view) {
    var self = this;
    self.view = view;

    self.view.bind('join', function() {
      self.join();
    });

    self.view.bind('login', function(data) {
      self.login(data);
    });
  }
LoginController.prototype.validate = function(data) {
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
    //PW
    if(data['pw']==""){
      var err="빈칸을 입력하세요!";
      var type="pw";
      self.view.showError(err,type);
      errorStatus=false;
    }
    
    return errorStatus;
  };
  LoginController.prototype.postLogin = function(data) {
    // TODO: 로그인 처리
    var _data={
      email : data['email'],
      password :data['pw']
    };
    HttpUtil.postData('/users/Login', _data, function(err, result) {
      if(err)
      {
        alert(err);
      }
      location.href = "/";
      console.log(result);
    });
    //에러 처리 
    //self.view.showError(err);
  };

  LoginController.prototype.join = function(data) {
    var self = this;
    location.href='/join';
    
  };

  LoginController.prototype.login = function(data) {
    //TODO: 로그인 코드 처리
    console.log(data);
    var self = this;    
    if (self.validate(data)) {
      console.log("successful!");
      self.postLogin(data);
      // TODO: 회원가입 요청
    }

  };

  return LoginController;
});