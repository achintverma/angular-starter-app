angular.module('goalService', [])
.service('goals', ['$http', function ($http) {
    
	this.goals = [];

    /*
     * Get list of all goals
     * @return Promise object  
     */
    this.getAll = function(){ 

    	if(this.goals.length > 0)
    		return this.goals;

    	return $http.get('./data/goals.json').then(function(res){
    	   return res.data.goals;
    	});
    }

    /*
     * Get list of goals based on array of goalId's 
     * @param goalsArray [Array]
     * @return Promise object  
     */
    this.getByIds = function(goalsArray){
         
         return $http.get("./data/goals.json").then(function(res){

            // filter goals based on matched guid
            var filtered = res.data.goals.filter(function(goal){
                return goalsArray.find(function(g){
                    if(goal.guid === g.guid)
                        return g;
                });
            });

            return filtered;
         });
    }

}]);