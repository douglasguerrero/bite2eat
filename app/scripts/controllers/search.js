'use strict';

/**
 * @ngdoc function
 * @name bite2eatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bite2eatApp
 */
angular.module('bite2eatApp')
	.controller('SearchCtrl', function($scope) {
			Parse.initialize("WSA1398Zaliy9pauhvHEg5uzfvrqwH1bXdmwRW7e", "4EiQQjH6Hm6Lfnl172GMNDCorWyghusvACWEhg9I");

			$scope.searchInput = function() {
					var Restaurant = Parse.Object.extend("Restaurant");
					var query = new Parse.Query(Restaurant);
					query.containedIn("foodTypes", [$scope.searchValue]);
					query.find({
						success: function(results) {
							alert("Successfully retrieved " + results.length + " scores.");
							for (var i = 0; i < results.length; i++) {
								var object = results[i];
								alert(object.get('foodTypes'));
							}
						},
						error: function(error) {
							alert("Error: " + error.code + " " + error.message);
						}
					});
				};
			});