'use strict';

/**
 * @ngdoc function
 * @name bite2eatApp.controller:OrdersCtrl
 * @description
 * # OrdersCtrl
 * Controller of the bite2eatApp
 */
angular.module('bite2eatApp')
  .controller('OrdersCtrl', function ($rootScope,$scope, $modal,$log) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.showHeader = true;
    $rootScope.showSearch = false;

    $scope.orders = []

    $scope.open = function (size,order) {

	    var modalInstance = $modal.open({
	      animation: false,
	      templateUrl: '/views/orderdetail.html',
	      controller: 'OrderdetailCtrl',
	      size: size,
	      windowClass: 'modalCustom',
	       resolve: {
	        order: function () {
	          return order;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      //$scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	 };

    $scope.loadOrders = function(){
    	var Orders = Parse.Object.extend("Order");
		var query = new Parse.Query(Orders);
		query.find({
		  success: function(results) {
		    for (var i = 0; i < results.length; i++) {
		      var object = results[i];
		      	$scope.$apply(function(){
	            	$scope.orders.push({
				      	objectId: object.id,
				      	clientName: object.get('clientName'),
				      	status: object.get('status'),
				      	total: object.get('total'),
				      	createdDate: object.createdAt
				      });
	          	});

		    }
		  },
		  error: function(error) {
		    alert("Error: " + error.code + " " + error.message);
		  }
		});
    };


  });
