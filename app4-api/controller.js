angular.module('apiApp').controller('ctrl', function($scope, svc) {

  var promise = svc.getPokemon();

  promise.then(function(pokemon) {
    $scope.pokemon = pokemon;
  })

  // var promise = svc.getStarships()
  //
  // promise.then(function(starships) {
  //   $scope.starships = starships;
  // })

}) // end of controller
