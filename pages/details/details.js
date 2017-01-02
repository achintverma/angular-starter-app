angular.module('programDetail',['programService', 'goalService'])
.component('programDetail', { 
	templateUrl: "pages/details/details.html",
	controller: ['$http', '$routeParams', 'programs', 'goals', '$log', function($http, $routeParams, programs, goals, $log){
		var self = this;
		self.program = {};
		self.goals = [];
		self.incentive = 0;

		programs.getProgram($routeParams.programId).then(function(res){
			self.program = res; 

			// Make a call to get goals only if there are goals defined for this program
			if(res.goals.length > 0){
				goals.getByIds(res.goals).then(function(res){
					self.goals = res;
					self.incentive = self.goals.reduce(function(a, b){
						return a + b.incentive_value;
					}, 0);
				});
			}

		});
			
	}]
}); 
