var app = angular.module('homepage', []);
app.controller('homepage_controller', function ($scope) {
    $scope.tasklist = tasklist;
});