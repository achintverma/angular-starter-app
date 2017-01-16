/*
 * This is a template for creating a service using angular module method. 
 * Use the example below to create services 
 *
 */

angular.module('programService', [])
.service('programs', ['$http', function ($http) {
    
	this.sorted_programs = [];

    /*
     * Get list of all programs and sort them based on display_order
     * @return Promise object  
     */
    this.getAll = function(){ 

    	return $http.get('URL HERE').then(function(res){
    		return res.data;
    	});
    }

}]);