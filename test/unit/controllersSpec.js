'use strict';

/* jasmine specs for controllers go here */
/*
describe('controllers', function() {

  it("should do something", function() {

  });

});
*/

describe('PhoneListCtrl', function(){

  beforeEach(function() {
    browser.get('../../app/index.html');
  });

  it('should create "phones" model with 3 phones', inject(function($controller) {
    var scope = {},
        ctrl = $controller('PhoneListCtrl', {$scope:scope});

    expect(scope.phones.length).toBe(3);
    expect(scope.name).toBe("Buddy");
  }));

});