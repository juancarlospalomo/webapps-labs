app.controller('location_controller', function ($scope, translateService) {
    $scope.quantity = 5.3;
    $scope.date = '2015-04-28';
    $scope.strings = translateService.getStrings();
});


