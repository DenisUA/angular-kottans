'use strict';

/**
 * @ngdoc function
 * @name angularKottansApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularKottansApp
 */
angular.module('angularKottansApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
