(function(){
  'use strict';

  angular.module("myFirstApp", [])
         .controller("MyFirstController", function($scope) {
              $scope.name = "Gaby";
              $scope.sayHello = function(){
                return $scope.name;
              }
         });
})();
