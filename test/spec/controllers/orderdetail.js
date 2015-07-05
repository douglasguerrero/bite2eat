'use strict';

describe('Controller: OrderdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('bite2eatApp'));

  var OrderdetailCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    OrderdetailCtrl = $controller('OrderdetailCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OrderdetailCtrl.awesomeThings.length).toBe(3);
  });
});
