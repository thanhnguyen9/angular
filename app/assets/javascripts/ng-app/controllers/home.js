angular.module('AngularRails')
    .controller('HomeController', function ($scope) {
        $scope.locationSearch = function(){
            alert($scope.searchInput)
        }
    });