var app = angular.module('homepageApp', ['ngMaterial']);

app.controller('homepage_controller', function ($scope) { });

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default').dark();
});