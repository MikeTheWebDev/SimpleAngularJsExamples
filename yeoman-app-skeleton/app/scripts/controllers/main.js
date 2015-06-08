'use strict';

/**
 * @ngdoc function
 * @name yeomanAppSkeletonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanAppSkeletonApp
 */
angular.module('yeomanAppSkeletonApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
