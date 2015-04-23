var app = angular.module('homepageApp', ['ngMaterial']);

app.controller('homepage_controller', function ($scope) {
    $scope.line = 'Sample Text';
    $scope.alert = function (value) {
        alert(value);
    }
});

