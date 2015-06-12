'use strict';

angular.module('manageProperties', [])
    .controller('propertyCtrl', function($scope) {
        $scope.propertyName = "";
        $scope.propertyLocation = "";
        $scope.myData = new Firebase("https://crackling-inferno-8136.firebaseio.com/Properties");
        
        $scope.properties = {};

        $scope.saveProperty = function() {
            $scope.myData.push({propertyName:$scope.propertyName,propertyLocation:$scope.propertyLocation});
            alert('Property Saved! ' + $scope.propertyName);
            $scope.propertyName = "";
            $scope.propertyLocation = "";
        };

        $scope.myData.on('value', function(snapshot) {
            $scope.properties = snapshot.val();
            $scope.$apply();
        });            
	
    })
   
;
