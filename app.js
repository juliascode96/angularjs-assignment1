(function () {
    'use strict';
    
    angular.module('LunchApp', [])
    .controller('LunchController', LunchController);
    
    LunchController.$inject = ['$scope'];
    function LunchController($scope) {
      $scope.items = '';
      $scope.lunchMessage = '';
    
      $scope.checkItems = function () {
        var itemsArray = $scope.items.split(',');

        if(itemsArray.length < 4){
            $scope.lunchMessage = 'Enjoy!';
        } else {
            $scope.lunchMessage = 'Too much!';
        }

        if($scope.items === ''){
            $scope.lunchMessage = 'Please enter data first';
        }
      };
    }
    
    })();