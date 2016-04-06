angular.module('angularKottansApp')
  .directive('showPokemon', function () {
      return {
        restrict: "E",
        templateUrl: 'views/directives/show-pokemon.html',
        scope: {
          pokemon: '='
        },
        link: function (scope, element) {
          scope.rotateCard = function() {
            $(element).find('.card-container').toggleClass('hover');
          }
        }
      };
    }
  );
