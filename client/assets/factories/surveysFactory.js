//***********************************************************************
app.factory('surveysFactory', function($http) {
  console.log('client/surveysFactory.js');
//***********************************************************************
  var surveys=[];
  // var question = {};
  var factory = {};
  var currentUser;

  factory.index  = function(callback) {
    $http.get('/surveys').then(function(res) {
      if (typeof callback === 'function') {
        callback(res.data);
      }
    });
  }
  factory.show = function(id, callback) {
    $http.get('/surveys/'+id).then(function(res) {
      if (typeof callback === 'function') {
        callback(res.data);
      }
    });
  }
  factory.create = function(newSurvey, callback) {
    survey = {
      name:newSurvey.name,
      question:newSurvey.question,
      one:newSurvey.one,
      two:newSurvey.two,
      three:newSurvey.three,
      four:newSurvey.four,
      likeone:newSurvey.likeone,
      liketwo:newSurvey.liketwo,
      likethree:newSurvey.likethree,
      likefour:newSurvey.likefour,
      date:new Date()};
    $http.post('/surveys/new', survey).then(function(res) {
      console.log("client/surveysFactory.js Create")
      console.log(res);
      console.log(res.data);
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }
  factory.update = function(survey, callback) {
    $http.put('/surveys/'+survey._id, survey).then(function(res) {
      console.log("client/surveysFactory.js Update")
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }

  factory.delete = function(survey, callback) {
    $http.delete('/surveys/'+survey._id).then(function(res) {
      console.log("client/surveysFactory.js Delete")
      console.log(res.data);
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }
  factory.getcurrentUser = function(){
    return currentUser;
  }

  factory.setcurrentUser = function(user){
    currentUser = user;
  }

  factory.logout = function(){
    currentUser = ''
  }

//***********************************************************************
  return factory;
})
//***********************************************************************
