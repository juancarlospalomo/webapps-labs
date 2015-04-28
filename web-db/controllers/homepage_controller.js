app.controller('homepage_controller', function ($scope, databaseService) {

    $scope.name = '';
    $scope.target_dateTime = '2015-04-28';

    $scope.add = function () {
        databaseService.add('TASK', ['name', 'target_datetime'], [$scope.name, $scope.target_dateTime]);
    }

});