angular.module('angularKottansApp')
  .directive('showPokemon', function () {
      return {
        restrict: "E",
        templateUrl: 'views/directives/show-pokemon.html',
        scope: {
          pokemonaza: '='
        },
        link: function (scope, element, attrs) {

        }
      };
    }
  );
