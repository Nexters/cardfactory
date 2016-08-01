//card.js
define([
  '../bower_components/underscore/underscore'
], function (
  _
) {
  'use strict';

  /**
   * Card Model
   *
   * @param {Object} params 모델 데이터
   * @param {String} [params.cardTypeId] 카드 타입 id
   * @param {String} [params.font] 폰트 스타일
   * @param {String} [params.content] 내용
   * @param {String} [params.source] 출처
   *
   * @constructor
   */
  function Card(params) {
    this.cardTypeId = params.cardTypeId;
    this.font = params.font;
    this.content = params.content;
    this.source = params.source;
  }

  /**
   * Create card model
   *
   * @param {Object} data
   * @param {String} data.cardTypeId
   * @param {String} data.font
   * @param {String} data.img
   * @param {String} data.content
   * @param {String} data.source
   * @param {Function} callback
   */
  Card.prototype.create = function(data, callback) {
    var newCard;
    if (!this.validate(data)) {
      return callback();
    }
    newCard = {
      cardTypeId: data.cardTypeId,
      font: data.font,
      img: data.img,
      content: data.content,
      source: data.source
    };

    //TODO: 서버에 저장 요청
    callback(newCard)
  };

  Card.prototype.validate = function(data) {
    if (!_.isString(data.cardTypeId)) {
      alert("카드 타입을 선택해주세요!");
      return false;
    }
    if (!_.isString(data.font)) {
      alert("폰트를 선택해주세요!");
      return false;
    }
    if (!_.isString(data.img)) {
      alert("이미지를 선택해주세요!");
      return false;
    }
    if (!_.isString(data.content)) {
      alert("내용을 입력해주세요!");
      return false;
    }
    if (!_.isString(data.source)) {
      alert("출처를 입력해주세요!");
      return false;
    }
    return true;
  };

  return Card;

});