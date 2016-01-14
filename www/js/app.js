// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'home', 'game', 'score', 'settings', 'level', 'about'])

.run(function($ionicPlatform, $rootScope) {

    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider

    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
    })

    .state('game', {
        url: '/game',
        templateUrl: 'templates/game.html',
        controller: 'GameCtrl'
    })

    .state('score', {
        url: '/score',
        templateUrl: 'templates/score.html',
        controller: 'ScoreCtrl'
    })

    .state('settings', {
        url: '/settings',
        templateUrl: 'templates/settings.html',
        controller: 'SettingsCtrl'
    })

    .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
    })

    .state('level', {
        url: '/level',
        templateUrl: 'templates/level.html',
        controller: 'LevelCtrl'
    });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
})

.controller('MainCtrl', function($scope, $rootScope, $state){

    // Cell values for game
    $rootScope.cellValues = {
        xValue: 13,
        yValue: 15
    };

    // Board init status always at false on app init
    $rootScope.boardInit = false;

    var yo = 0;

    // If user information exists in local BDD, use them globally
    if(yo > 0){

    }
    // If not use default information
    else{
        // User settings
        $rootScope.settings = {
            username: "King",
            music: true,
            colorSchem: 1
        };

        // Best user score
        $rootScope.bestScore = 0;
    }

    // Init default easy game values
    $rootScope.userparams = {
        difficulty: 1,
        enemyNumber: 10,
        obstacleNumber: 6,
        lifeNb: 3,
        bombNb: 3,
        lifeOnMap: 1,
        bombOnMap: 2
    };

    // Actions on stateChangeSuccess
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        //console.log(fromState);
        //console.log(toState);
    });
});
