//card-view.js
define([
  '../bower_components/jquery/dist/jquery'
], function (
  $
) {
  'use strict';

  function CardView(template) {
    this.template = template;

    this.$container = $('#container');
    this.$theme = $('#theme');
    this.$title = $('#title');
    this.$text = $('#text');

    this.$saveCard = $('#save_card_btn');
  }

  CardView.prototype.render = function(viewCmd, parameter) {
    var self = this;
    var viewCommands = {
      showCard: function () {
        //TODO: 카드 저장된 이후에 보여주는 메서드
        self.$container.html(self.template.show(parameter));
      }
    };

    viewCommands[viewCmd]();
  };


  CardView.prototype.bind = function(event, handler) {
    var self = this;
    if (event === 'saveCard') {
      self.$saveCard.click(function() {
        // TODO: 데이터 가져오기
        var data = {
          theme: self.$theme.find('active'),
          title: self.$title.val(),
          text: self.$text.val()
        };
        handler(data);
      });
    }
  };

  return CardView;
});