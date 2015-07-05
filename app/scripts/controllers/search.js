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
		$scope.noResults = true;

		$scope.$on('doSearch', function(ev, args) {
			$scope.searchInput(args.searchValue);
		});

		function loadNearByRestaurants() {
			var Restaurant = Parse.Object.extend("Restaurant");
			var query = new Parse.Query(Restaurant);
			query.find({
				success: function(results) {
					$scope.$apply(function() {
						$scope.results = results;
					});
				},
				error: function(error) {
					alert("Error: " + error.code + " " + error.message);
				}
			});
		};

		$scope.searchInput = function(value) {
			var Restaurant = Parse.Object.extend("Restaurant");
			var query = new Parse.Query(Restaurant);
			query.containedIn("foodTypes", [value.toLowerCase()]);
			query.find({
				success: function(results) {
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
			$scope.activeId = restaurantId;
			var MenuItem = Parse.Object.extend("MenuItem");
			var query = new Parse.Query(MenuItem);
			query.equalTo("restaurantId", restaurantId);
			query.find({
				success: function(menuItems) {
					$scope.$apply(function() {
						$scope.menuItems = menuItems;
						$scope.noResults = menuItems.length === 0;
					});
				},
				error: function(object, error) {
					alert("Error: " + error.code + " " + error.message);
				}
			});
		};

		$scope.addOrder = function() {
			var Order = Parse.Object.extend("Order");
			var order = new Order();

			order.set("clientName", "Douglas Guerrero");
			order.set("status", "Pending");
			order.set("total", 1);

			order.save(null, {
			  success: function(order) {
			    alert('The order was created successfully');
			  },
			  error: function(order, error) {
			    alert('Failed to create new object, with error code: ' + error.message);
			  }
			});
		};

		loadNearByRestaurants();
	});
