//card-view.js
define([
  '../bower_components/jquery/dist/jquery'
], function (
  $
) {
  'use strict';

  function CardView(template) {
    this.template = template;

    this.$container = $('#card_container');
    this.$cardItem = $('#card_item');
    this.$content = $('#card_content');
    this.$source = $('#card_source');

    this.$saveCardBtn = $('#save_card_btn');
  }

  CardView.prototype.render = function(viewCmd, params) {
    var self = this;
    var viewCommands = {
      draw: function () {
        self.$container.html(self.template.draw(params));
        self.applyStyle();
      },
      drawMenu: function () {
        // TODO: 메뉴 타입에 따라 보여지는 메뉴 달라짐!
        switch(params.menuType) {
          case 'img':
            break;
          case 'cardType':
            break;
          case 'font':
            break;
          case 'fontSize':
            break;
          default:
            break;
        }
      }
    };

    viewCommands[viewCmd]();
  };

  CardView.prototype.applyStyle = function() {

  };

  CardView.prototype.bind = function(event, handler) {
    var self = this;
    if (event === 'saveCard') {
      self.$saveCardBtn.click(function() {
        // TODO: 데이터 가져오기
        var data = {
          cardTypeId: self.$cardItem.data('type'),
          font: self.$cardItem.data('font'),
          img: self.$cardItem.data('img'),
          content: self.$content.val(),
          source: self.$source.val()
        };
        handler(data);
      });
    }

    if (event === 'changeMenu') {
      // TODO: 메뉴 클릭 이벤트 바인딩
    }

    if (event === 'imgUpload') {

    }

    if (event === 'changeCardType') {

    }

    if (event === ''){
      
    }
  };

  return CardView;
});