angular.module("angularKottansApp").factory("Pokemons", [
  '$resource', function($resource) {
    return $resource('http://pokeapi.co/api/v2/pokemon', {}, {
      query: {
        method: 'GET'
        //isArray: false
      }
    });
  }
]);
//http://pokeapi.co/api/v2/pokemon/1
