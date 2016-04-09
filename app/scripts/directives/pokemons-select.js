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



//class BrandsSelectDirective {
//  constructor () {
//    'ngInject';
//
//    return {
//      scope: {
//        brands: '=',
//        Ui: '=ui',
//        selectedType: '='
//      },
//      templateUrl: 'app/components/directives/brands-select/brands-select.directive.html',
//      link: function(scope) {
//        scope.types = [];
//        scope.dropdown = {
//          isOpen: false
//        };
//
//        scope.$watch('brands', function(currentBrands) {
//          let types = [];
//          angular.forEach(currentBrands, function(brand) {
//            this.push(brand.external_type);
//          }, types);
//          scope.types = _.uniq(types);
//        });
//
//        scope.selectType = function(selectedType) {
//          scope.selectedType = selectedType;
//        };
//      }
//    };
//  }
//}
//
//export default BrandsSelectDirective;
