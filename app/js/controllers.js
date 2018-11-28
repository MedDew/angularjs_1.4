'use strict';

/* Controllers */
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ["$scope", "$http", function ($scope, $http)
{
  $http.get("phones/phones.json").success(function(data){
    $scope.phones = data.splice(0,5);  
  });
//   $scope.phones = 
//   [
//     {
//      'name': 'Nexus S',
//      'snippet': 'Fast just got faster with Nexus S.',
//      'age' : 1
//     },
//     {
//         'name': 'Motorola XOOM™ with Wi-Fi',
//         'snippet': 'The Next, Next Generation tablet.',
//         'age' : 2
//     },
//     {
//         'name': 'MOTOROLA XOOM™',
//         'snippet': 'The Next, Next Generation tablet.',
//         'age' : 3
//     }
//   ];
  $scope.test = function(){
    
        let names =$scope.phones.map(function(elm) {
        //   for(var e in elm.name)
        //     console.log(e+" => "+elm.name[e]);

        //   console.log(elm.name.getText());
          console.log(elm.name);

          return elm.name;
        });
        console.log(names);
        return names;
  };

  $scope.name = "Buddy";

  //Default orderProp value
  $scope.orderProp = "age";
}]);

phonecatControllers.controller("PhoneDetailCtrl", ["$scope", "$routeParams", 
    function($scope, $routeParams)
    {
        $scope.phoneId = $routeParams.phoneId;
    }

]);