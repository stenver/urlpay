var app = angular.module('UrlPay');

app.controller('ReceiveController', function ($scope, $http, $location, $state) {
  $scope.introtext = false;
  $scope.noTransferText = false;
  $scope.transfer = {
      receiverAccount: ''
  };

  $http.get("/transfer/" + $state.params.urlhash)
    .success(function(data) {
      $scope.transfer = data;
      console.log("Receiver active!", data);
    }).error(function(err){
      $scope.noTransferText = true;
      console.log(err);
    });

  $scope.receive = function() {
    var transfer = $scope.transfer;
    var inputvalue = document.forms["receiveForm"]["receiveInputIban"].value;
    if (inputvalue==null || inputvalue=="") {
      alert("IBAN must be filled out");
      return false;
    }
    else {
      $http.put("/transfer", transfer).success(function(data){
        $scope.introtext = true;
        console.log("Transfer done!");
        return data;
      }).error(function(err){
        console.log(err);
      });
    }
  }
});