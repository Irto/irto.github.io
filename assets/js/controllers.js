define(['angular', 'app/services'], function (angular) {
	'use strict';

	/* Controllers */

	return angular.module('irtoApp.controllers', ['irtoApp.services'])
	.controller('HomeCtrl', ['$scope', function ($scope) {
	    $scope.contentOpened = false;
	    $scope.isActive = 'home';
	}])

	.controller('AboutCtrl', ['$scope', function ($scope) {
	    $scope.contentOpened = true;
	    $scope.isActive = 'about';
	}])

	.controller('BlogCtrl', ['$scope', function ($scope) {
	    $scope.contentOpened = true;
	    $scope.isActive = 'blog';
	}])

	.controller('SkillsCtrl', ['$scope', function ($scope) {
	    $scope.contentOpened = true;
	    $scope.isActive = 'skills';
	}])

	.controller('ContactCtrl', ['$scope', function ($scope) {
	    $scope.contentOpened = true;
	    $scope.isActive = 'contact';

	    $scope.contact = {
	    		name: '',
	    		email: '',
	    		msg: ''
	    	};
	}]);
});
