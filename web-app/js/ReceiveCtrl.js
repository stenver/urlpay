var app = angular.module('UrlPay');

app.controller('ReceiveController', function ($scope, $http, $route, $location, $routeParams) {
  $http.get("/app/transfer/" + $routeParams["urlHash"])
    .success(function(data){
      $scope.transfer = data
      console.log("Got transfer!", data);
    }).error(function(err){
      console.log(err);
    });

  $scope.receive = function(transfer){
    $http.post("/app/transfer", transfer).success(function(data){
      console.log("Transfer done!");
    }).error(function(err){
      console.log(err);
    });
  }
});