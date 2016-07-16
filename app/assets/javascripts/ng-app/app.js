angular.module('AngularRails', ['ngRoute', 'templates'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeController'
            })
            .when('/become-stylist', {
                templateUrl: 'becomeStylist.html',
                controller: 'BecomeStylistController'
            })
    });