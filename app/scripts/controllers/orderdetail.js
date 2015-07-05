'use strict';

/**
 * @ngdoc function
 * @name bite2eatApp.controller:OrderdetailCtrl
 * @description
 * # OrderdetailCtrl
 * Controller of the bite2eatApp
 */
angular.module('bite2eatApp')
  .controller('OrderdetailCtrl', function ($scope, $modalInstance, order) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.order = order;

  $scope.close = function () {
    $modalInstance.dismiss('cancel');
  };
});
