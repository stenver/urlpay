var app = angular.module('UrlPay');

app.controller('SenderController', function ($scope, $http, SendService, $window) {

  var getRandom = function () {
    var number = '' + Math.random();
    return number.substring(2, number.length);
  };

  $scope.transfer = {
    urlHash: getRandom(),
    amount: "",
    senderCurrency: "EUR",
    country: "Estonia",
    firstName: "",
    lastName: "",

    cardType: "Visa",
    creditCardNumber: "",
    securityCode: "",
    senderTransfered: true
  };

  $scope.origin = window.location.origin + '/';

  $scope.getTransferUrl = function () {
    var domainUrl = "http://" + window.location.host + "/index.html#/receive/";
    return domainUrl + $scope.transfer.urlHash;
  };

  $scope.reloadPage = function() {
    console.log("reloading page");
    $window.location.reload();
    //$state.go($state.current.name, $state.params, { reload: true });
  };

  $scope.sendBtn = function () {
    SendService.transfer($scope.transfer, function () {
      console.log('Transfer done');
    }, function (err) {
      console.error('Error occurred');
    });
  };
});
