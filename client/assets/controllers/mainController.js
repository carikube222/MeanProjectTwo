//******************************************************************************
app.controller('mainController', function($scope, $location, surveysFactory) {
//******************************************************************************
  $scope.currentUser = surveysFactory.getcurrentUser();
  console.log($scope.currentUser);
  console.log('Main Controller Loaded');
//******************************************************************************

  surveysFactory.index(function(data) {
    console.log(data.length);
    $scope.surveys = data;
  })

  $scope.delete = function(survey){
    surveysFactory.delete(survey, function(data){
      surveysFactory.index(function(data){
        $scope.surveys = data;
        $location.path('/surveys');
      });
    })
  }

//***********************************************************************
})
//***********************************************************************
