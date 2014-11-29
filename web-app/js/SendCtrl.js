var app = angular.module('UrlPay');

app.controller('SenderController', function ($scope, $http, SendService) {
    var getRandom = function () {
        var number = '' + Math.random();
        var randomStr = number.substring(2, number.length);
        return randomStr;
    };

    $scope.transfer = {
        urlHash: getRandom(),
        amount: "",
        senderCurrency: "eur",
        country: "Estonia",
        firstName: "",
        lastName: "",

        cardType: "Visa",
        creditCardNumber: "",
        securityCode: "",
        senderTransfered: true
    };

    $scope.sendBtn = function () {
        var transfer = $scope.transfer;
        var data = {
            receiver: {
                amount: transfer.amount,
                urlhash: transfer.urlhash,
                receiverAccount: transfer.senderCurrency,
                cardType: transfer.cardType,
                country: transfer.country,
                firstName: transfer.firstName,
                lastName: transfer.lastName,
                currency: transfer.receiverCurrency
            }
        };

        $http.get("http://challenge.transferwise.com/?teamname=wearegoingtolondon&data=" + JSON.stringify(data))
            .success(function (data) {
                console.log("Message sent to transferwire");
            }).error(function (err) {
                console.log(err);
            });

        console.log('sending');
        SendService.transfer($scope.transfer, function () {
            console.log('Transfer done');
        }, function (err) {
            console.error('Error occurred');
        });
    };
});
