angular.module('level', [])

.controller('LevelCtrl', function($scope, $rootScope, $location) {
    $scope.easyLevel = function(){
        $rootScope.userparams = {
            difficulty: 1,
            enemyNumber: 10,
            obstacleNumber: 6,
            lifeNb: 3,
            bombNb: 3,
            lifeOnMap: 1,
            bombOnMap: 2
        };
        $location.path("/game");
    };
    $scope.intermediateLevel = function(){
        $rootScope.userparams = {
            difficulty: 8,
            enemyNumber: 4,
            obstacleNumber: 2,
            lifeNb: 3,
            bombNb: 2,
            lifeOnMap: 1,
            bombOnMap: 1
        };
        $location.path("/game");
    };
    $scope.difficultLevel = function(){
        $rootScope.userparams = {
            difficulty: 3,
            enemyNumber: 6,
            obstacleNumber: 2,
            lifeNb: 3,
            bombNb: 1,
            lifeOnMap: 0,
            bombOnMap: 1
        };
        $location.path("/game");
    };

    $scope.homePath = function(){
        $location.path('/home');
    };
});
