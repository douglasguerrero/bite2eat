'use strict';

/**
 * @ngdoc function
 * @name bite2eatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bite2eatApp
 */
angular.module('bite2eatApp').controller('SearchCtrl', function($scope, $rootScope) {

	$rootScope.showSearch = true;
	$rootScope.showHeader = true;
	$scope.noResults = true;
	$scope.loading = false;

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
		var userGeoPoint = new Parse.GeoPoint(15.5513688, -88.0125635);
		var query = new Parse.Query(Restaurant);
		query.containedIn("foodTypes", [value.toLowerCase()]);
		query.withinKilometers("location", userGeoPoint, 5);
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

	function loadNearByRestaurants() {
		var Restaurant = Parse.Object.extend("Restaurant");
		var userGeoPoint = new Parse.GeoPoint(15.5513688, -88.0125635);
		var query = new Parse.Query(Restaurant);
		query.withinKilometers("location", userGeoPoint, 5);
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
		$scope.noResults = true;
		$scope.loading = true;

		var MenuItem = Parse.Object.extend("MenuItem");
		var query = new Parse.Query(MenuItem);
		query.equalTo("restaurantId", restaurantId);
		query.find({
			success: function(menuItems) {
				$scope.$apply(function() {
					$scope.noResults = menuItems.length === 0;
					$scope.menuItems = menuItems;
					$scope.loading = false;
				});

			},
			error: function(object, error) {
				alert("Error: " + error.code + " " + error.message);
				$scope.$apply(function() {
					$scope.loading = false;
				});
			}
		});
	};

	$scope.addOrder = function(price) {
		var Order = Parse.Object.extend("Order");
		var order = new Order();

		order.set("clientName", "Douglas Guerrero");
		order.set("status", "Pending");
		order.set("total", price);

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
