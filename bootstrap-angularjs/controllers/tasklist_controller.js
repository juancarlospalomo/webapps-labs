var app = angular.module('tasklistApp', ['ngMaterial']);
app.controller('tasklist_controller', function ($scope) {
    $scope.tasklist = tasklist;
});