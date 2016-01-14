angular.module('score', [])

.controller('ScoreCtrl', function($scope, $rootScope, $location) {
    $scope.userName = $rootScope.settings.username;

    $scope.score = 0;

    if($rootScope.lastScore !== undefined){
        $scope.score = $rootScope.lastScore;
    } else{
        $scope.score = 'Please play to have a score';
    }

    $scope.homePath = function(){
        $location.path('/home');
    };

    $scope.levelPath = function(){
        $location.path('/level');
    };
});
