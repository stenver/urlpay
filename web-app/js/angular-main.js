var app = angular.module('UrlPay', ['ngResource', 'ui.router', 'ngClipboard']);

app.config(function($stateProvider, $urlRouterProvider, ngClipProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('send', {
            url: '/',
            templateUrl: 'views/send.html',
            controller: 'SenderController'
        })
          .state('receive', {
              url: '/receive/{urlhash}',
              templateUrl: 'views/receive.html',
              controller: 'ReceiveController'
          })
    ngClipProvider.setPath("lib/bower_components/zeroclipboard/dist/ZeroClipboard.swf");
});