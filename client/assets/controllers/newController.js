//******************************************************************************
app.controller('newController', function($scope, $location, surveysFactory) {
//******************************************************************************
$scope.currentUser = surveysFactory.getcurrentUser();
  console.log($scope.currentUser);
  console.log('new Controller Loaded');
//******************************************************************************
$scope.surveys=[];
$scope.create = function(){
  $scope.haserrors=[];
  console.log($scope.currentUser);
  if($scope.newSurvey.question.length< 8) {
      $scope.haserrors.push("At least 8 characters for Question");
    }
  if($scope.newSurvey.one.length< 3) {
      $scope.haserrors.push("At least 3 characters for Option 1");
    }
  if($scope.newSurvey.two.length< 3) {
      $scope.haserrors.push("At least 3 characters for Option 2");
    }
  if($scope.newSurvey.three.length< 3) {
      $scope.haserrors.push("At least 3 characters for Option 3");
    }
  if($scope.newSurvey.four.length< 3) {
      $scope.haserrors.push("At least 3 characters for Option 4");
    }
  if ($scope.haserrors.length >0){
    return;
  }

  $scope.newSurvey.name = $scope.currentUser;
  console.log($scope.newSurvey.name)
  surveysFactory.create($scope.newSurvey, function(data){
    if (data.errors) {
      $scope.errors = data.errors;
      console.log("didn't create a new survey", $scope.errors);
    } else {
      console.log("Got saved", data);
      $scope.newSurvey = {};
      $location.path('/surveys');
      }
    })
  }
//***********************************************************************
})
//***********************************************************************



// var question = $scope.newSurvey.question
// var one = $scope.newSurvey.one
// var two = $scope.newSurvey.two
// var three = $scope.newSurvey.three
// var four = $scope.newSurvey.four
// var likeone = $scope.newSurvey.likeone
// var liketwo = $scope.newSurvey.liketwo
// var likethree = $scope.newSurvey.likethree
// var likefour = $scope.newSurvey.likefour
// var date = new Date()
