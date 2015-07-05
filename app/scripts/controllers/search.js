'use strict';

/**
 * @ngdoc function
 * @name bite2eatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bite2eatApp
 */
angular.module('bite2eatApp').controller('SearchCtrl', function($scope,$rootScope) {

		$rootScope.showSearch = true;
		$rootScope.showHeader = true;

		$scope.$on('doSearch', function(ev, args) {
			$scope.searchInput(args.searchValue);
		});

		$scope.searchInput = function(value) {
			var Restaurant = Parse.Object.extend("Restaurant");
			var query = new Parse.Query(Restaurant);
			query.containedIn("foodTypes", [value.toLowerCase()]);
			query.find({
				success: function(results) {
					console.log(results);
					$scope.$apply(function() {
						$scope.results = results;
					});
				},
				error: function(error) {
					alert("Error: " + error.code + " " + error.message);
				}
			});
		};

		$scope.menuItem = function(restaurantId) {
			console.log(restaurantId);
			var MenuItem = Parse.Object.extend("MenuItem");
			var query = new Parse.Query(MenuItem);
			query.equalTo("restaurantId", restaurantId);
			query.find({
				success: function(menuItems) {
					$scope.$apply(function() {
						$scope.menuItems = menuItems;
					});
				},
				error: function(object, error) {
					alert("Error: " + error.code + " " + error.message);
				}
			});
		};
	});
