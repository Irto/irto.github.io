define([
    'angular',
    'app/filters',
    'app/services',
    'app/directives',
    'app/controllers',
    'angular.route',
    'angular.animate',
    'ng-scrollbar',
    ], function (angular, filters, services, directives, controllers) {
        'use strict';

        // Declare app level module which depends on filters, and services and load routes
        return angular.module('irtoApp', ['ngRoute', 'ngAnimate', 'ngScrollbar', 'irtoApp.controllers', 'irtoApp.filters', 'irtoApp.services', 'irtoApp.directives'])
            .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
                $routeProvider.
                    when('/', {
                        controller: 'HomeCtrl'
                    }).
                    when('/about', {
                        templateUrl: 'template/about',
                        controller: 'AboutCtrl'
                    }).
                    when('/blog/:article?', {
                        templateUrl: 'template/blog',
                        controller: 'BlogCtrl'
                    }).
                    when('/skills', {
                        templateUrl: 'template/skills',
                        controller: 'SkillsCtrl'
                    }).
                    when('/contact', {
                        templateUrl: 'template/contact',
                        controller: 'ContactCtrl'
                    }).
                    otherwise({redirectTo: '/'});
            }])
            .run(function($rootScope, $window){
                angular.element($window).bind('resize',function(){
                    $rootScope.$emit('windowResize');
                });
            });
});