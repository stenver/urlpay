var app = angular.module('UrlPay', ['ngResource', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/send');

    $stateProvider
        .state('send', {
            url: '/send',
            templateUrl: 'views/send.html',
            controller: 'SenderController'
        })
        .state('receive', {
            url: '/receive',
            templateUrl: 'views/receive.html',
            controller: 'ReceiveController'
        })
});