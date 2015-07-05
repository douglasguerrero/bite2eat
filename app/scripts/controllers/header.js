'use strict';

/**
 * @ngdoc function
 * @name bite2eatApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the bite2eatApp
 */
angular.module('bite2eatApp')
  .controller('HeaderCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.showHeader = true;
  });
