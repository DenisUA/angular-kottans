'use strict';

/**
 * @ngdoc function
 * @name angularKottansApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularKottansApp
 */
angular.module('angularKottansApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
