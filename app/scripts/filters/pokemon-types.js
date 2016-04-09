angular.module('angularKottansApp')
  .filter('pokemonTypes', function() {
  return function(collection, input) {
    if (!collection && !input) {
      return collection;
    }
    else {
      var result = [];
      if (input) {
        angular.forEach(collection, function(pokemon) {
          if (pokemon.types) {
            angular.forEach(pokemon.types, function(type) {
              if (type.type.name == input) {
                result.push(pokemon);
              }
            })
          }
        }, result);
        return result;
      }
      return collection;
    }
  };
});
