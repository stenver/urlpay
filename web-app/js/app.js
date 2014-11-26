var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/user/list', {
      controller: 'UserListController',
      templateUrl: 'views/user/list.html'
    })
    .otherwise({
      redirectTo:'/user/list'
    });
});