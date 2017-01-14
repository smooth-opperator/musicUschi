;(function(ng) {
  'use strict';

  ng.module('musicUschi')
    .config([
      '$locationProvider',
      function($locationProvider) {
        
        $locationProvider.html5Mode(true);
        
      }
    ]);
}(window.angular));
