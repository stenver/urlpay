var app = angular.module('UrlPay');

app.controller('ReceiveController', function ($scope, $http, $location, $state) {

  $http.get("/app/transfer/" + $state.params.urlhash)
    .success(function(data){
      $scope.transfer = data
      console.log("Got transfer!", data);
    }).error(function(err){
      console.log(err);
    });

  $scope.receive = function(transfer){
    var data = {
      sender: {
        amount: transfer.amount,
        urlhash: transfer.urlhash,
        currency: transfer.senderCurrency
      }
    };
    $http.get("http://challenge.transferwise.com/?teamname=wearegoingtolondon&data="+JSON.stringify(data))
      .success(function(data){
        console.log("Message sent to transferwire");
      }).error(function(err){
        console.log(err);
      });
    $http.post("/app/transfer", transfer).success(function(data){
      console.log("Transfer done!");
    }).error(function(err){
      console.log(err);
    });
  }
});