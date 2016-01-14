angular.module('home', [])

.controller('HomeCtrl', function($scope, $rootScope, $location) {

    $scope.levelPath = function(){
        $location.path('/level');
    };

    $scope.aboutPath = function(){
        $location.path('/about');
    };

    $scope.settingsPath = function(){
        $location.path('/settings');
    };

});
