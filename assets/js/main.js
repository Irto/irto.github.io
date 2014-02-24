requirejs.config({
    baseUrl: 'assets/js/libs',
    paths: {
        modernizr: ['http://ajax.aspnetcdn.com/ajax/modernizr/modernizr-2.7.1', 'modernizr.min'],
        angular: ['https://ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular.min', 'angular.min'],
        'angular.route': ['https://ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-route', 'angular-route.min'],
        'angular.animate': ['http://ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-animate'],
        app: '../'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angular.route': ['angular'],
        'angular.animate': ['angular'],
        'ng-scrollbar': ['angular']
    },
    priority: [
        "angular"
    ]
});

window.name = "NG_DEFER_BOOTSTRAP!";

requirejs([
    'angular',
    'app/app'
    ], function(angular, app) {
        'use strict';
        var $html = angular.element(document.getElementsByTagName('html')[0]);

        angular.element().ready(function() {
            angular.resumeBootstrap([app['name']]);
        });
});