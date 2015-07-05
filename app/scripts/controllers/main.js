'use strict';

/**
 * @ngdoc function
 * @name bite2eatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bite2eatApp
 */
angular.module('bite2eatApp')
  .controller('MainCtrl', function ($scope,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.showHeader = false;
    $scope.success = false;

    $scope.collectEmail = function(){
    	var Interested = Parse.Object.extend("Interested");
    	var interested = new Interested();
    	interested.set("email",$scope.email);
    	interested.save(null, {
		  success: function() {
		  	$scope.email = '';
		  	$scope.$apply(function(){
            	$scope.success = true;
        	});
		  },
		  error: function(error) {
		  	$scope.success = false;
		    alert('Failed to create new object, with error code: ' + error.message);
		  }
		});
    };

  });
