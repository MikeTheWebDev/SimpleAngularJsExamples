'use strict';

/**
 * @ngdoc overview
 * @name yeomanAppSkeletonApp
 * @description
 * # yeomanAppSkeletonApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanAppSkeletonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'widgetServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      /**
      TODO create a widgets view, use widgetServices to read json data
      TODO create Widget Controller
      .when('/widgets', {
        templateUrl: 'views/widgetList.html',
        controller: 'WidgetCtrl'
      })**/
      .otherwise({
        redirectTo: '/'
      });
  });
