'use strict';

angular.module('manageProperties', ["firebase"])
    .controller('propertyCtrl', function($scope) {
        $scope.propertyName = "";
        $scope.propertyLocation = "";
        // connect to firebase
        $scope.myData = new Firebase("https://crackling-inferno-8136.firebaseio.com/Properties");
        // what does this line even do?
        $scope.fb = $firebase(myData);
        // sync as object
        $scope.syncObject = fb.$asObject();
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
