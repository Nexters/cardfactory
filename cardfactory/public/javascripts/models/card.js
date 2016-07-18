//card.js
define([
  '../bower_components/underscore/underscore'
], function (
  _
) {
  'use strict';

  function Card() {

  }

  /**
   * Create card model
   *
   * @param {Object} data
   * @param {String} data.theme
   * @param {String} data.title
   * @param {String} data.text
   * @param {Function} callback
   */
  Card.prototype.create = function(data, callback) {
    var newCard;
    if (!this._validate(data)) {
      return callback();
    }
    newCard = {
      theme: data.theme,
      title: data.title,
      text: data.text
    };

    //TODO: 서버에 저장 요청
    callback(newCard)
  };

  Card.prototype._validate = function(data) {
    // TODO: 데이터 체크
    return true;
  };

  return Card;

});