angular.module('settings', [])

.controller('SettingsCtrl', function($scope, $rootScope, $location) {

    $scope.s = {
        username: $rootScope.settings.username,
        music: $rootScope.settings.music,
        colorSchem: $rootScope.settings.colorSchem
    };

    $scope.homePath = function(){
        $location.path('/home');
    };

    $scope.refreshSettings = function(s){
        if (s.username !== undefined && s.username && s.username.length > 0 && typeof s.username === 'string') {
            $rootScope.settings.username = s.username;
        }
        $rootScope.settings.music = s.music;
        $rootScope.settings.colorSchem = s.colorSchem;
    };
});
