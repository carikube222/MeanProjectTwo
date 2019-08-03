app.controller('logoutController', function($scope, $location, surveysFactory) {
  $scope.surveys =[];
  console.log($scope.surveys)
  console.log(typeof($scope.currentUser))
  surveysFactory.logout();
  console.log("logout comes here")
  $location.path('/logout');

})
