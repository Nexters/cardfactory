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
    //Email
    var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
    if(data['email']== ""){
      //console.log("이메일이 빈칸");
      return false;
    }
    if(!data['email'].match(regExp))
    {
      //console.log("형식에 맞지 않는 이메일");
      return false;
    }

    //Nickname
     if(data['nickname']==""){
      //console.log("닉네임이 빈칸");
      return false;
    }

    if(data['nickname'].length<3 || data['nickname'].length>12){
      //console.log("닉네임길이 error");
      return false;
    }

    //PW

    if(data['pw']==""){
      //console.log("pw 빈칸");
      return false;
    }
    if(data['pw'].length<6 || data['pw'].length>50){
      //console.log("pw길이 error");
      return false;
    }
    if(data['pw']!=data['pw_confirm']){
      //console.log("pw가 pw_confirm이랑 다름");
      return false;
    }
    return true;
  };

  JoinController.prototype.postJoin = function(data) {
    // TODO: 회원가입 처리
    //HttpUtil.postData()
    //에러 처리 self.view.showError(err)
  };

  JoinController.prototype.join = function(data) {
    console.log(data);
    var self = this;    
    if (self.validate(data)) {
      console.log("successful!");
      // TODO: 회원가입 요청
    }
  };

  return JoinController;
});