'use strict';

/**
 * @ngdoc function
 * @name dashAdmin.controller:WidgetListCtrl
 * @description
 * # WidgetListCtrl
 * Controller of the dashAdmin app
 */
angular.module('dashAdmin')
  .controller('WidgetListCtrl', function ($scope) {
    $scope.widgets = [
      {
       name: 'profile', 
       url: 'profile.html',
       description: 'View your user profile account, settings, and more!'
      },
      {
       name: 'graphs', 
       url: 'graphs.html',
       description: 'View your graphs!'
      },
      {
       name: 'tools', 
       url: 'tools.html',
       description: 'View your toolbox!'
      }
    ];
  });
