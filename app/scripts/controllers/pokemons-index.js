angular.module('angularKottansApp')
  .controller('PokemonsIndexController', function ($scope, $http, Pokemons) {
    $scope.loading = true;
    Pokemons.query().$promise.then(function(response) {
      $scope.pokemons = response.results;
      $scope.loading = false;
      $scope.nextLink = response.next;
    });
    $scope.loadMore = function() {
      $scope.loading = true;
      $http({
        method: 'GET',
        url: $scope.nextLink
      }).then(function (response) {
        $scope.pokemons = $scope.pokemons.concat(response.data.results);
        $scope.nextLink = response.data.next;
      }, function (response) {

      }).finally(function () {
        $scope.loading =false;
      });
    }
  });
