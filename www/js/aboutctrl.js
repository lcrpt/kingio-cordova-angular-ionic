angular.module('about', [])

.controller('AboutCtrl', function($scope, $rootScope, $location) {

    $scope.homePath = function(){
        $location.path('/home');
    };
});
