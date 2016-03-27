'use strict';

/**
 * @ngdoc overview
 * @name angularKottansApp
 * @description
 * # angularKottansApp
 *
 * Main module of the application.
 */
angular
  .module('angularKottansApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
      .when('/pokemons', {
        templateUrl: 'views/pokemons-index.html',
        controller: 'PokemonsIndexController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
