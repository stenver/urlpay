var app = angular.module('UrlPay');

app.controller('SenderController', function ($scope, $http) {
    $scope.transfer = {
        urlHash: "SomeHash",
        amount: 1000,
        currency: "eur",
        country: "Estonia",
        creditCardNumber: "12321321231"
    };
    $scope.send = function(transfer){
        data = {
            receiver: {
                amount: transfer.amount,
                urlhash: transfer.urlhash,
                receiverAccount: transfer.receiverAccount,
                currency: transfer.receiverCurrency
            }
        };
        $http.get("http://challenge.transferwise.com/?teamname=wearegoingtolondon&data="+data)
          .success(function(data){
              console.log("Message sent to transferwire");
          }).error(function(err){
              console.log(err);
          });

        $http.port("/app/transfer", transfer).success(function(data){
            console.log("Transfer done!");
        }).error(function(err){
            console.log(err);
        });
    }
});
