//*****************************************************************************
var app = angular.module('app', ['ngRoute']);
//*****************************************************************************
  app.config(function ($routeProvider) {
    console.log('client/app.js config routes');
    $routeProvider
    .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'loginController',
    })
    .when('/surveys', {
        templateUrl: 'partials/main.html',
        controller: 'mainController',
    })
    .when('/surveys/:id/show', {
      templateUrl: 'partials/show.html',
      controller: 'showController',
    })
    .when('/surveys/new', {
      templateUrl: 'partials/new.html',
      controller: 'newController',
    })
    .when('/logout', {
      templateUrl: 'partials/logout.html',
      controller: 'logoutController'
    })
    .otherwise({
      redirectTo: '/'
    });
//*****************************************************************************
  });
