(function() {
  'use strict';
  angular.module("NameCalculator", [])
  .controller('NameCalculatorController', function($scope){
      $scope.name = '';
      $scope.totalValue = 0;
      $scope.displayNumericValue = function() {
         let totalNameValue = calculateNumericForString($scope.name); //get the total value
         $scope.totalValue = totalNameValue;
      }

      function calculateNumericForString(string) {
        let totalStringValue = 0;
        for (let i = 0; i < string.length; i++) {
          totalStringValue += string.charCodeAt(i);
        }
        return totalStringValue;
      }
  });
})();
