angular.module('apiApp').controller('ctrl', function($scope, svc) {

  var promise = svc.getStarships()

  promise.then(function(starships) {
    $scope.starships = starships;
  })


}) // end controller
