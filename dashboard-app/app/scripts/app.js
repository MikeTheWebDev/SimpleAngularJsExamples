'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardApp', [
    'ngAnimate',
    'PostApp',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'manageProperties',
    'ngTouch',
    'widgetServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/properties', {
        templateUrl: 'views/templates/properties/index.html',
        controller: 'propertyCtrl'
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
