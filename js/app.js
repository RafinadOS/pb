// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var playbuy = angular.module('playbuy', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('menu', {
              url: '/menu',
              templateUrl: 'templates/menu.html',
              controller: 'playbuyCtrl'
            })

            .state('repertuar', {
                url: '/repertuar',
                templateUrl: 'templates/repertuar.html',
                controller: 'playbuyCtrl'
            })
            .state('raspisanie', {
                url: '/raspisanie',
                templateUrl: 'templates/raspisanie.html',
                controller: 'playbuyCtrl'
            })
            .state('changeseat', {
                url: '/changeseat',
                templateUrl: 'templates/changeseat.html',
                controller: 'playbuyCtrl'
            })
        $urlRouterProvider.otherwise('/repertuar');
    });