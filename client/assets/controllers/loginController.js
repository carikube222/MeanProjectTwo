app.controller('loginController', function($scope, $location, surveysFactory) {
  $scope.currentUser = undefined;
  $scope.surveys =[];
  // $scope.currentUser = surveysFactory.getcurrentUser();
  console.log($scope.currentUser)
  if ($scope.currentUser == undefined){
    console.log("Here?")
    $scope.addUser = function(){
      console.log("howabouthere?")
      $scope.currentUser = $scope.newUser;
      console.log($scope.currentUser);
      surveysFactory.setcurrentUser($scope.currentUser);
      console.log("come here?");
      $location.path('/surveys');
    }
  }
})
