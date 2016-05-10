
angular
	.module('gStudy')
	.directive("login",['loginService', 'authService', function(loginService, authService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/login/login.view.html",
			controller: function($rootScope, $scope, $location, authService){
				console.log("login directive")

				$scope.user = {};
				$scope.login = function() {
				  authService.login($scope.user)
				    .then(function(user) {
				      authService.setUserInfo(user);
				      $location.path('/profile');
				      $rootScope.currentUser = authService.getUserInfo();
				    })
				    .catch(function(err) {
				      // check status code, send appropriate message
				      console.log(err);
				    });
				};

			}
		};
}]);

