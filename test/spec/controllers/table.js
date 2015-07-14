'use strict';

describe('Controller: TablectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('ibookApp'));

  var TablectrlCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    TablectrlCtrl = $controller('TablectrlCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TablectrlCtrl.awesomeThings.length).toBe(3);
  });
});
