(function(){
	'use strict'
	angular.module('MyApp')
		.factory('dataService', dataFunction)
		
	dataFunction.$inject = ['dataRepository']
	function dataFunction(dataRepository){
		var service = {};
		service.getPosts = getPosts;
		service.getComments = getComments;
		return service;
		
		function getPosts(){
			return dataRepository.getPosts().then(function(data){
				return data;
			});
		}

		function getComments(){
			return dataRepository.getComments().then(function(data){
				return data;
			});
		}
	}
})();