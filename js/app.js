var jiffApp = angular.module('jiffApp', [
	"ngRoute",
	"dashboard",
	"programDetail"
]); 

jiffApp.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/dashboard', {
          template: '<dashboard></dashboard>'
        }).
        when('/details/:programId', {
          template: '<program-detail></program-detail>'
        }). 
        otherwise('/dashboard');
    }
]);
