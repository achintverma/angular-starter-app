angular.module('dashboard',['programService'])
.component('dashboard', {
	templateUrl: "pages/dashboard/dashboard.html",
	controller: ['$http', 'programs', '$log', function($http, programs, $log){
		
		//var self = this;
		//self.programs = [];
		
	}]
}); 
