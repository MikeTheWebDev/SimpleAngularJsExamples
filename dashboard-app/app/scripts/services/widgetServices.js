angular.module('widgetServices', [])
    .factory('Widget', ['$resource', 
        function($resource){
          return $resource('widgets/:widgetId.json', {}, {
            query: {method: 'GET', params:{widgetId:'widgets'}, isArray:true}
          });
     }]);
