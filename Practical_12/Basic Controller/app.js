var app = angular.module("myApp", []);

app.controller("BasicCtrl", function($scope) {
    $scope.message = "Hello AngularJS!";
    $scope.greet = function() {
        alert("Welcome!");
    }
});