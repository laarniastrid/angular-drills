angular.module('app3').controller('ctrl', function($scope, svc) {

  $scope.data = svc.getData();

  $scope.filterObj =
  {
    email: ".uk",
    phone: "3"
  }

}) // end of controller
