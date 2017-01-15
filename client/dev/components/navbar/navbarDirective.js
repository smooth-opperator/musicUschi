;(function(ng) {
  'use strict';

  ng.module('musicUschi')
    .controller('NavbarController', ['$log',
      function($log) {
        let self = this;
        self.relativeDate = new Date(this.creationDate);
        console.log(self.relativeDate, this.creationDate, "self relative date")

        return self;
      }
    ])
    .directive('navbarDirective', [
      '$log',
      function($log) {
        let directive = {
          restrict: 'E',
          templateUrl: 'components/navbar/navbar.html',
           scope: {
              creationDate: '='
          },
          controller: 'NavbarController',
          controllerAs: 'vm',
          bindToController: true
        };

        return directive;
      }
    ])
}(window.angular));
