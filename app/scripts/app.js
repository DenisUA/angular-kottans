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
        templateUrl: 'views/pokemons-index.html',
        controller: 'PokemonsIndexController'
      })
      .when('/pokemons', {
        templateUrl: 'views/pokemons-index.html',
        controller: 'PokemonsIndexController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
