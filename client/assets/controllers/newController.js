//******************************************************************************
app.controller('newController', function($scope, $location, surveysFactory) {
//******************************************************************************
$scope.currentUser = surveysFactory.getcurrentUser();
  console.log($scope.currentUser);
  console.log('new Controller Loaded');
//******************************************************************************
$scope.surveys=[];
// $scope.newSurvey.name = $scope.currentUser;
$scope.create = function(){
  console.log($scope.currentUser);
  $scope.errors=[];
  if($scope.newSurvey.question.length< 8) {
      $scope.errors.push("At least 8 characters for Question");
    }
  if($scope.newSurvey.one.length< 3) {
      $scope.errors.push("At least 3 characters for Option 1");
    }
  if($scope.newSurvey.two.length< 3) {
      $scope.errors.push("At least 3 characters for Option 2");
    }
  if($scope.newSurvey.three.length< 3) {
      $scope.errors.push("At least 3 characters for Option 3");
    }
  if($scope.newSurvey.four.length< 3) {
      $scope.errors.push("At least 3 characters for Option 4");
    }
  if ($scope.errors.length >0){
    return;
  }

  var question = $scope.newSurvey.question
  var one = $scope.newSurvey.one
  var two = $scope.newSurvey.two
  var three = $scope.newSurvey.three
  var four = $scope.newSurvey.four
  var likeone = $scope.newSurvey.likeone
  var liketwo = $scope.newSurvey.liketwo
  var likethree = $scope.newSurvey.likethree
  var likefour = $scope.newSurvey.likefour
  var date = new Date()
  $scope.newSurvey.name = $scope.currentUser;
  console.log($scope.newSurvey.name)
  var name = $scope.newSurvey.name

  $scope.newSurvey.name = $scope.currentUser;
  surveysFactory.create($scope.newSurvey, function(data){
    $scope.newSurvey.name = $scope.currentUser;
    if (data.errors) {
      $scope.errors = data.errors;
      console.log("didn't create a new survey", $scope.errors);
    } else {
      console.log("Got saved", data);
      // $scope.newSurvey = {};
      $location.path('/surveys');
      }
    })
  }
//***********************************************************************
})
//***********************************************************************
