var app = angular.module('Chat', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
