var jiffApp = angular.module('jiffApp', [
	"ngRoute",
	"dashboard"
]); 

jiffApp.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/dashboard', {
          template: '<dashboard></dashboard>'
        }).
        otherwise('/dashboard');
    }
]);
