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

/*
describe("Phonecat Controllers", function(){
  
  describe("PhoneListCtrl", function(){
    var scope, ctrl;

    beforeEach(module('phonecatApp'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('PhoneListCtrl', {$scope:scope});
    }));

    it('should create "phones" model with 3 phones', function() {
      expect(scope.phones.length).toBe(20);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });

  });

});
*/

describe('PhoneCat controllers', function() {
  describe('PhoneListCtrl', function(){
    var scope, ctrl, $httpBackend;
  
    // Load our app module definition before each test.
    beforeEach(module('phonecatApp'));
  
    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service in order to avoid a name conflict.
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json').
          respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
  
      scope = $rootScope.$new();
      ctrl = $controller('PhoneListCtrl', {$scope: scope});
    }));

    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(scope.phones).toBeUndefined();
      $httpBackend.flush();
       expect(scope.phones).toEqual([{name: 'Nexus S'},
                                   {name: 'Motorola DROID'}]);
    });

    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });

  });


  describe('PhoneDetailCtrl', function(){
    // Load our app module definition before each test.
    beforeEach(module('phonecatApp'));
    var scope, $httpBackend, ctrl, 
    xyzPhoneData = function() {
      return {
        name: 'phone xyz',
        images: ['image/url1.png', 'image/url2.png']
      }
    };

    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());

      $routeParams.phoneId = 'xyz';
      scope = $rootScope.$new();
      ctrl = $controller('PhoneDetailCtrl', {$scope: scope});
    }));


    it('should fetch phone detail', function() {
      expect(scope.phone).toBeUndefined();
      $httpBackend.flush();

      expect(scope.phone).toEqual(xyzPhoneData());
    });
  });

});