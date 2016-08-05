//card-view.js
define([
], function (
) {
  'use strict';

  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#x27;',
    '`': '&#x60;'
  };

  var escapeHtmlChar = function (chr) {
    return htmlEscapes[chr];
  };

  var reUnescapedHtml = /[&<>"'`]/g;
  var reHasUnescapedHtml = new RegExp(reUnescapedHtml.source);

  var escape = function (string) {
    return (string && reHasUnescapedHtml.test(string))
      ? string.replace(reUnescapedHtml, escapeHtmlChar)
      : string;
  };

  function CardTemplate() {
    this.defaultTemplate
      =	'<div id="card_item" data-type="{{cardTypeId}}" data-font="{{font}}" data-img="{{img}}">'
      +		'<input type="text" id="card_content">{{content}}</input>'
      +		'<input type="text" id="card_source">{{source}}</input>'
      +	'</div>';
  }

  CardTemplate.prototype.draw = function (data) {
    var view = '';
    // TODO: 카드 타입에 따라 템플릿 다르게 그려줘야함!
    var template = this.defaultTemplate;

    template = template.replace('{{cardTypeId}}', data.cardTypeId || '');
    template = template.replace('{{font}}', data.font || '');
    template = template.replace('{{img}}', data.img || '');
    template = template.replace('{{content}}', escape(data.content) || '');
    template = template.replace('{{source}}', escape(data.source) || '');

    view = view + template;

    return view;
  };

  return CardTemplate;
});