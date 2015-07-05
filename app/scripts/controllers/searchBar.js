'use strict';

/**
 * @ngdoc function
 * @name bite2eatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bite2eatApp
 */
angular.module('bite2eatApp').controller('SearchBarCtrl', function($scope,$rootScope) {

		$rootScope.showSearch = true;

		$scope.triggerSearch = function() {
      $rootScope.$broadcast('doSearch', { searchValue: $scope.searchValue });
    }
	});
