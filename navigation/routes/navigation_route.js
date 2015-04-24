var app = angular.module('homeApp', ['ngMaterial', 'ui.router', 'homepageApp', 'tasklistApp']);

app.config(function ($stateProvider) {

        console.log('routing');

        $stateProvider.state('homepage', {
            url: "",
            controller: "homepage_controller",
            templateUrl: "templates/home.html"
        });

        $stateProvider.state('tasklist', {
            url: "/tasklist",
            controller: "tasklist_controller",
            templateUrl: "templates/tasklist.html"
        });

    })