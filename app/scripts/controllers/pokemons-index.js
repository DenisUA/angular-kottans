angular.module('angularKottansApp')
  .controller('PokemonsIndexController', function ($scope, Pokemons) {
    Pokemons.query().$promise.then(function(response) {
      $scope.pokemons = response.results;
    })
  });
