//card-view.js
define([
], function (
) {
  'use strict';

  function CardView(template) {
    this.template = template;

    this.$container = $('#card_container');
    this.$imageMenu = $('#image_menu_option');
    this.$templateMenu = $('#template_menu_option');
    this.$fontMenu = $('#font_menu_option');
    this.$fontSizeMenu = $('#font_size_menu_option');
    this.$saveCardBtn = $('#save_card_btn');
  }

  CardView.prototype.render = function(viewCmd, params) {
    var self = this;
    var viewCommands = {
      draw: function () {
        self.$container.html(self.template.draw(params));
        self.$cardItem = $('#card_item');
        self.$content = $('#card_content');
        self.$source = $('#card_source');
        self.applyStyle();
      },
      drawMenu: function () {
        switch(params.menu) {
          case 'image':
            self.$imageMenu.show();
            self.$imageMenu.siblings().hide();
            break;
          case 'template':
            self.$templateMenu.show();
            self.$templateMenu.siblings().hide();
            break;
          case 'font':
            self.$fontMenu.show();
            self.$fontMenu.siblings().hide();
            break;
          case 'fontSize':
            self.$fontSizeMenu.show();
            self.$fontSizeMenu.siblings().hide();
            break;
          default:
            break;
        }
      }
    };

    viewCommands[viewCmd]();
  };

  CardView.prototype.applyStyle = function() {
    var coverImg = this.$cardItem.data('img');
    this.$cardItem.css({
      'background-image': 'url("' + coverImg + '")'
      'background-size': 'cover'
    });

  };

  CardView.prototype.bind = function(event, handler) {
    var self = this;
    if (event === 'saveCard') {
      self.$saveCardBtn.click(function() {
        // TODO: 데이터 가져오기
        var data = {
          cardTypeId: self.$cardItem.data('type'),
          font: self.$cardItem.data('font'),
          fontSize: self.$cardItem.data('fontsize'),
          brightness: 1,
          img: self.$cardItem.data('img'),
          content: self.$content.val(),
          source: self.$source.val()
        };
        handler(data);
      });
    }

    if (event === 'changeMenu') {
      $('#menu_select_option_list > div').click(function() {
        handler($(this).data('menu'));
      });
    }

    if (event === 'imgUpload') {
      $('#image_upload_btn').fileupload({
        dataType: 'json',
        done: function (e, data) {
          if (data && data.result) {
            handler(data.result);
          }
        }
      });
    }

    if (event === 'changeCardType') {



    }

    if (event === ''){
      
    }
  };

  return CardView;
});