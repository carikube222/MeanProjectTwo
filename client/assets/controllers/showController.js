//******************************************************************************
app.controller('showController', function($scope, $location, surveysFactory, $routeParams) {
//******************************************************************************
  $scope.currentUser = surveysFactory.getcurrentUser();
  console.log($scope.currentUser);
  console.log('Show Controller Loaded');
//******************************************************************************
  // $scope.surveys =[];
  // $scope.survey={};
  var id = $routeParams.id;

  surveysFactory.show(id, function(data) {
    survey_id = data._id;
    console.log(data._id)
    $scope.survey = data;
  })

  $scope.updateOne = function(){
    $scope.survey.likeone += 1;
    surveysFactory.update($scope.survey, function(data){
      surveysFactory.show(id, function(data) {
        survey_id = data._id;
        console.log(data._id)
        $scope.survey = data;
      })
    })
  }
  $scope.updateTwo = function(){
    $scope.survey.liketwo += 1;
    surveysFactory.update($scope.survey, function(data){
      //need something here
      // $location.url('/data._id')
    })
  }
  $scope.updateThree = function(){
    $scope.survey.likethree +=1;
    surveysFactory.update($scope.survey, function(data){
      //need something here
      // $location.url('/data._id')
    })
  }
  $scope.updateFour = function(){
    $scope.survey.likefour +=1;
    surveysFactory.update($scope.survey, function(data){
      //need something here
      // $location.url('/data._id')
    })
  }
//******************************************************************************
})
//******************************************************************************
