;(function(ng) {
  'use strict';

  ng.module('musicUschi')
    .config([
      '$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'todo/templates/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
          })
          .when('/about', {
            templateUrl: 'routes/aboutRoute/aboutRoute.html',
            controller: 'AboutRouteController',
            controllerAs: 'aboutCtrl'
          })
          .when('/listen', {
            templateUrl: 'routes/listenRoute/listenRoute.html',
            controller: 'ListenRouteController',
            controllerAs: 'listenCtrl'
          })
          .when('/news', {
            templateUrl: 'routes/newsRoute/newsRoute.html',
            controller: 'NewsRouteController',
            controllerAs: 'newsCtrl'
          })
          // .when('/todo', {
          //   templateUrl: 'todo/templates/todo.html',
          //   controller: 'TodoController',
          //   controllerAs: 'todoCtrl'
          // })
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
}(window.angular));
