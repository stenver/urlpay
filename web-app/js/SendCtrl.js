var app = angular.module('UrlPay');

console.log("sendCtrl");

app.controller('SenderController', function ($scope, $http) {
    console.log("lol");
    $scope.transfer = {
        urlHash: "SomeHash",
        amount: 1000,
        currency: "eur",
        country: "Estonia",
        creditCardNumber: "12321321231"
    };
    $scope.send = function(transfer){
        $http.port("/app/transfer", transfer).success(function(data){
            console.log("Transfer done!");
        }).error(function(err){
            console.log(err);
        });
    }
});
