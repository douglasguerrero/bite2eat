'use strict';

/**
 * @ngdoc overview
 * @name bite2eatApp
 * @description
 * # bite2eatApp
 *
 * Main module of the application.
 */
angular
  .module('bite2eatApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {

    Parse.initialize("WSA1398Zaliy9pauhvHEg5uzfvrqwH1bXdmwRW7e", "4EiQQjH6Hm6Lfnl172GMNDCorWyghusvACWEhg9I");


    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/beta/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/beta/dashboard/orders', {
        templateUrl: 'views/orders.html',
        controller: 'OrdersCtrl',
        controllerAs: 'Orders'
      })
      .when('/beta/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
