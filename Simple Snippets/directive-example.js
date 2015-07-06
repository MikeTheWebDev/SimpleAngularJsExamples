// use angular.module('appName') if you just are getting the module, if you are creating new one use the following shown below
angular.module('directiveApp', [])

.directive("superman", function() {
    return {
        restrict: "E",
        template: "<div>Here I am to save the day!</div>"
    }
})

;
