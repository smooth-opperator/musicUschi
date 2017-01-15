;(function(ng) {
  'use strict';

  ng.module('musicUschi')
    .controller('AboutRouteController', [
      '$log',
      function($log) {
        var self = this;

        self.welcomeText = "Hello this is welcome text...";
        self.creationDate = new Date();

        function _setBackground(imgUrl) {
          document.getElementById('background').style.backgroundImage = "url('" + imgUrl + "')";
        }

        _setBackground('/common/images/yuval_elespectador.jpg');

        return self;
      }
    ]);
}(window.angular));
