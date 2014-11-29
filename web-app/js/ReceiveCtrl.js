var app = angular.module('UrlPay');

app.controller('ReceiveController', function ($scope, $http, $location, $state) {
  $scope.transfer = {
      receiverAccount: ''
  };

  $http.get("/app/transfer/" + $state.params.urlhash)
    .success(function(data) {
      $scope.transfer = data;
      console.log("Got transfer!", data);
    }).error(function(err){
      console.log(err);
    });

  $scope.receive = function() {
    var transfer = $scope.transfer;
    var data = {
      sender: {
        amount: transfer.amount,
        urlhash: transfer.urlhash,
        currency: transfer.receiverCurrency,
        receiverAccount: transfer.receiverAccount
      }
    };
    $http.get("http://challenge.transferwise.com/?teamname=wearegoingtolondon&data="+JSON.stringify(data))
      .success(function(data){
        console.log("Message sent to transferwire");
      }).error(function(err){
        console.log(err);
      });
    $http.put("/app/transfer", transfer).success(function(data){
      console.log("Transfer done!");
    }).error(function(err){
      console.log(err);
    });
  }
});