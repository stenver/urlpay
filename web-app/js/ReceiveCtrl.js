var app = angular.module('UrlPay');

app.controller('ReceiveController', function ($scope, $http, $location, $state) {
  $scope.introtext = false;
  $scope.transfer = {
      receiverAccount: ''
  };

  $http.get("/transfer/" + $state.params.urlhash)
    .success(function(data) {
      $scope.transfer = data;
      console.log("Got transfer!", data);
    }).error(function(err){
      console.log(err);
    });

  $scope.receive = function() {
    var transfer = $scope.transfer;
    $http.put("/transfer", transfer).success(function(data){
      $scope.introtext = true;
      console.log("Transfer done!");
      return data;
    }).error(function(err){
      console.log(err);
    });
  }
});