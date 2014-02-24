define(['angular', 'app/services'], function (angular, services) {
	'use strict';

  /* Directives */

	angular.module('irtoApp.directives', ['irtoApp.services'])
		.directive('mainMenu', ['$location', '$http', function($location, $http) {
			 return {
			 	restrict: 'AE',
			 	replace: true,  
			 	templateUrl: 'template/partial/main-menu',
			 	scope: { }, 	
			 	controller: function($scope, $element){
			 		var menuList = $scope.menuList = [];

			 		$http.get('/load/menu-list')
			 			.then(function(data){
					 		$scope.menuList = data.data;

					 		$scope.$emit('$routeChangeSuccess');
			 			});

		 			$scope.$on('$routeChangeSuccess', function () {
				        var items = $scope.menuList;
				        var path = $location.path();

				        for (var i = 0; i < items.length; i++) {
				        	var item = items[i];
               				var href = item['uri'];
               				var endC = path.indexOf('/', 2);

               				if(endC < 0) endC = path.length;
				            item['isActive'] = !!( href === path.slice(1, endC ) );
				        }
				    });

			 		return;
			 	}
			 }
		}]);
});