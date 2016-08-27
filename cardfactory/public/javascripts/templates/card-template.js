//card-view.js
define([
], function (
) {
  'use strict';

  var DEFAULT_FONT = 'Nanum';
  var DEFAULT_FONT_SIZE = '30';

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
      =	'<div id="card_item" data-type="{{cardTypeId}}" data-font="{{font}}" data-fontsize="{{fontSize}}" data-img="{{img}}" data-brightness="{{brightness}}">'
      +		'<div class="card-content-wrap text-center">'
      +		  '<textarea id="card_content" class="card-text-input" placeholder="내용을 입력해주세요.">{{content}}</textarea>'
      +		'</div>'
      +		'<div class="card-source-wrap text-center">'
      + 		'<input type="text" id="card_source" class="card-text-input" placeholder="출처를 입력해주세요.">{{source}}</input>'
      +		'</div>'
      +	'</div>';
  }

  CardTemplate.prototype.draw = function (data) {
    var view = '';
    // TODO: 카드 타입에 따라 템플릿 다르게 그려줘야함!
    var template = this.defaultTemplate;

    template = template.replace('{{cardTypeId}}', data.cardTypeId || 1);
    template = template.replace('{{fontSize}}', data.fontSize || DEFAULT_FONT_SIZE);
    template = template.replace('{{font}}', data.font || DEFAULT_FONT);
    template = template.replace('{{img}}', data.img || '');
    template = template.replace('{{brightness}}', data.brightness || '');
    template = template.replace('{{content}}', escape(data.content) || '');
    template = template.replace('{{source}}', escape(data.source) || '');

    view = view + template;

    return view;
  };

  return CardTemplate;
});