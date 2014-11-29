var app = angular.module('UrlPay', ['ngResource', 'ui.router', 'ngClipboard']);

app.config(function($stateProvider, $urlRouterProvider, ngClipProvider) {

    $urlRouterProvider.otherwise('/send');

    $stateProvider
        .state('send', {
            url: '/send',
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