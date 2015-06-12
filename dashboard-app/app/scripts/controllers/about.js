'use strict';

/**
 * @ngdoc function
 * @name yeomanAppSkeletonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanAppSkeletonApp
 */
angular.module('yeomanAppSkeletonApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
