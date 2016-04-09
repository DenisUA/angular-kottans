angular.module('angularKottansApp')
  .directive('showPokemon', function ($http) {
      return {
        restrict: "E",
        templateUrl: 'views/directives/show-pokemon.html',
        scope: {
          pokemon: '='
        },
        link: function (scope, element) {
          $http({
            method: 'GET',
            url: scope.pokemon.url
          }).then(function (response) {
            angular.extend(scope.pokemon, response.data);
          }, function (response) {

          }).finally(function () {
            $(element).find('.loading-card').hide();
            $(element).find('.loaded-card').removeClass('hidden');
          });

          scope.rotateCard = function() {
            $(element).find('.card-container').toggleClass('hover');
          }
        }
      };
    }
  );
