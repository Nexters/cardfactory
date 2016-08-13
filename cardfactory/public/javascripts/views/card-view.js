//card-view.js
define([
], function (
) {
  'use strict';

  var MAX_ROWS = 2;

  function CardView(template) {
    this.template = template;

    this.$container = $('#card_container');
    this.$imageMenu = $('#image_menu_option');
    this.$fontMenu = $('#font_menu_option');
    this.$fontSizeMenu = $('#font_size_menu_option');
    this.$brightnessMenu = $('#brightness_menu_option');
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

        self.$content.unbind('keydown').keydown(function(event) {
          var rows = $(this).val().split('\n').length;
          if (rows === 1) {
            $(this).css('height', '60px');
          } else if (rows === 2) {
            $(this).css('height', '120px');
          }

          // 2줄 넘어가서 엔터 쳤을 때 엔터키 막기 위한 처리
          if (event.which === 13 && rows >= MAX_ROWS) {
            return false;
          }
        });
      },
      drawMenu: function () {
        switch(params.menu) {
          case 'image':
            self.$imageMenu.show();
            self.$imageMenu.siblings().hide();
            break;
          case 'font':
            self.$fontMenu.show();
            self.$fontMenu.siblings().hide();
            break;
          case 'fontSize':
            self.$fontSizeMenu.show();
            self.$fontSizeMenu.siblings().hide();
            break;
          case 'brightness':
            self.$brightnessMenu.show();
            self.$brightnessMenu.siblings().hide();
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
    var fontSize = this.$cardItem.data('fontsize');
    this.$cardItem.css({
      'background-image': 'url("' + coverImg + '")',
      'background-size': 'cover'
    });

    this.$content.css({
      'font-size': fontSize + 'px'
    })

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

    if (event === 'changeImage') {
      $('.image-menu-item').click(function() {
        handler($(this).data('img'));
      });
    }

    if (event === 'changeFont'){
      $('#font_menu_option > img').click(function() {
        handler($(this).data('font'));
      });
    }

    if (event === 'changeFontSize'){
      $('#font_size_menu_option > img').click(function() {
        handler($(this).data('fontsize'));
      });
    }

    if (event === 'changeBrightness'){
      $('#brightness_menu_option > img').click(function() {
        handler($(this).data('brightness'));
      });
    }
  };

  return CardView;
});