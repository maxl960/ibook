'use strict';

/**
 * @ngdoc function
 * @name ibookApp.controller:TablectrlCtrl
 * @description
 * # TablectrlCtrl
 * Controller of the ibookApp
 */
angular.module('ibookApp')
  .controller('TablectrlCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.list=['book1','book2','book3'，'book4'];
  });
