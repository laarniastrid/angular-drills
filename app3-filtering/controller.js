angular.module('app2').controller('ctrl', function($scope, svc) {

  $scope.theData = svc.getData();



}) // end of controller
