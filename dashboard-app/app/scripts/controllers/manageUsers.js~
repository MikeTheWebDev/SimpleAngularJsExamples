angular.module('user', ['ngRoute', 'firebase', 'ui.bootstrap'])

.value('fbURL', 'https://crackling-inferno-8136.firebaseio.com/')
.value('user_table', 'user')
.value('country_table', 'country')
.value('state_table', 'state')

.factory('Users', function($firebase, fbURL, user_table) {
    return $firebase(new Firebase(fbURL + user_table));
})
.factory('Country', function($firebase, fbURL, country_table) {
    return $firebase(new Firebase(fbURL + country_table));
})
.factory('State', function($firebase, fbURL, state_table) {
    return $firebase(new Firebase(fbURL + state_table));
})


.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'ListCtrl',
            templateUrl: 'list.html'
        })
        .otherwise({
            redirectTo: '/'
        });
})

.controller('ListCtrl', function($scope, $modal, $location, Users, Country, State, $firebase, fbURL, $routeParams, user_table, filterFilter) {
    // Define valriables
    $scope.alerts = [];     // array of alert message objects.

    $scope.users = Users;
    
    // Remove user
    $scope.removeRecord = function(userId) {
        var userUrl = fbURL + user_table + '/' + userId;
        $scope.user = $firebase(new Firebase(userUrl));
        $scope.user.$remove()
        $scope.alerts.splice(0, 1);
        $scope.alerts.push({
            type: 'success',
            msg: "User removed successfully!"
        });
    };

    // Close alert message
    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

    // Modal: called by edit(userId) and Add new user
    $scope.open = function(userId) {
        var modalInstance = $modal.open({
            templateUrl: 'add_user_modal',
            controller: $scope.model,
            resolve: {
                id: function() {
                    return userId;
                }
            }
        });
    };

    $scope.model = function($scope, $modalInstance, Users, Country, id, $firebase, fbURL, user_table) {
        $scope.user = {};
        $scope.country = Country;   // result object from firebase
        $scope.state = State;       // result object from firebase
        $scope.alerts = [];         // array of alert message objects.
        $scope.country_array = [];  // holdes removed functioned data i.e. only result array of County obj of firebase in formate of angularjs
        $scope.state_array = [];    // holdes removed functioned data i.e. only result array of State obj of firebase in formate of angularjs
        $scope.filteredArray = [];  // holdes filterd data for dependent country-state dropdown
        $scope.designations = [{
            name: 'Co-owner',
            value: "Co-owner"
        }, {
            name: 'PM',
            value: "PM"
        }, {
            name: 'HR',
            value: "HR"
        }, {
            name: 'Developer',
            value: "Developer"
        }];
        
        // Convert firebase result object into angularjs object array all other deafault functions of firebase gets removed
        $.each(angular.fromJson(angular.toJson(Country)), function(key, val) {
            val.id = parseInt(key);
            $scope.country_array.push(val);
        });
        $.each(angular.fromJson(angular.toJson(State)), function(key, val) {
            val.id = parseInt(key);
            $scope.state_array.push(val);
        });

        // Watch function for country-state dropdown
        $scope.$watch("user.country", function(newValue) {
            $scope.filteredArray = filterFilter($scope.state_array, newValue);
            $scope.user.state = $scope.filteredArray[0].id;
            if ($scope.filteredArray.length != 0 && $scope.filteredArray[0].country_id != newValue) {
                $scope.user.state = $scope.filteredArray[1].id;
            }
        }, true);

        // if clicked edit. id comes from $scope.modal->userId
        if (angular.isDefined(id)) {
            var userUrl = fbURL + user_table + '/' + id;
            $scope.user = $firebase(new Firebase(userUrl));
            $scope.user.id = id;
        } else {
            $scope.user.designation = $scope.designations[0].name;
            $scope.user.country = $scope.country_array[0].id;
        }

        // close modal
        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };

        // Add new user
        $scope.add = function() {
            Users.$add($scope.user)
            $modalInstance.dismiss('cancel');
        };

        // Save edited user.
        $scope.save = function() {
            $scope.user.$save();
            $modalInstance.dismiss('cancel');
        };
    };
})
