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
      =	'<div data-theme="{{theme}}">'
      +		'<label>{{title}}</label>'
      +		'<p>{{text}}</p>'
      +	'</div>';
  }

  CardTemplate.prototype.show = function (data) {
    var view = '';
    var template = this.defaultTemplate;

    template = template.replace('{{theme}}', data.theme);
    template = template.replace('{{title}}', escape(data.title));
    template = template.replace('{{text}}', escape(data.text));

    view = view + template;

    return view;
  };

  return CardTemplate;
});