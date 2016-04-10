angular.module('angularKottansApp')
  .directive('pokemonsSelect', function () {
      return {
        restrict: "E",
        templateUrl: 'views/directives/pokemons-select.html',
        scope: {
          pokemons: '=',
          selectedType: '='
        },
        link: function (scope) {
          scope.types = [];
          scope.$watch('pokemons', function(currentPokemons) {
            var types = [''];
            angular.forEach(currentPokemons, function(pokemon) {
              if (pokemon.types) {
                angular.forEach(pokemon.types, function(type) {
                  types.push(type.type.name);
                })
              }
            }, types);

            scope.types = _.uniq(types);
          }, true);
        }
      };
    }
  );
