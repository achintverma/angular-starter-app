angular.module('programService', [])
.service('programs', ['$http', function ($http) {
    
	this.sorted_programs = [];

    /*
     * Get list of all programs and sort them based on display_order
     * @return Promise object  
     */
    this.getAll = function(){ 

    	return $http.get('./data/program_blueprints.json').then(function(res){
    		var unsorted_programs = res.data.program_blueprints;

    		return unsorted_programs.sort(function(a,b){
				return a.display_order - b.display_order;
			});
    	});
    }

    /*
     * Get a program based on programId
     * @param programId 
     * @return Promise object  
     */
    this.getProgram = function(programId){

    	return $http.get('./data/program_blueprints.json').then(function(res){
    		var unsorted_programs = res.data.program_blueprints;

    		unsorted_programs.sort(function(a,b){
				return a.display_order - b.display_order;
			});

			this.sorted_programs = unsorted_programs;
			return this.sorted_programs.find(function(p){
	    		if(p.guid === programId)
	    			return p;
	    	});	

    	});
    }

}]);