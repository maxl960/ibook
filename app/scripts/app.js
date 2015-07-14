'use strict';

/**
 * @ngdoc overview
 * @name ibookApp
 * @description
 * # ibookApp
 *
 * Main module of the application.
 */
angular
  .module('ibookApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/table', {
        templateUrl: 'views/table.html',
        controller: 'TablectrlCtrl',
        controllerAs: 'table'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
