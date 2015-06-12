angular.module("WidgetApp", [])
    
    .controller('WidgetListController', function($scope, $http) {
        $http.get('../widgets.json').success(function(data) {
          $scope.widgets = data;
        });
    
    $scope.orderProperty = 'id';
    });
