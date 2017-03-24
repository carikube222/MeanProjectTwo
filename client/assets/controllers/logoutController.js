app.controller('logoutController', function($scope, $location, surveysFactory) {
  // $scope.currentUser = ''
  $scope.surveys =[];
  // $scope.currentUser = surveysFactory.getcurrentUser();
  console.log(typeof($scope.currentUser))
  surveysFactory.logout();
  console.log("logout comes here")
  $location.path('/logout');

})
