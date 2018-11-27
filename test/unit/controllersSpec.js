'use strict';

/* jasmine specs for controllers go here */
/*
describe('controllers', function() {

  it("should do something", function() {

  });

});
*/

/*describe('PhoneListCtrl', function(){

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
*/
describe("Phonecat Controllers", function(){
  
  describe("PhoneListCtrl", function(){
    var scope, ctrl;

    beforeEach(module('phonecatApp'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('PhoneListCtrl', {$scope:scope});
    }));

    it('should create "phones" model with 3 phones', function() {
      expect(scope.phones.length).toBe(3);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });

  });

});