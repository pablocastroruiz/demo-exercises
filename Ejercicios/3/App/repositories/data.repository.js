(function(){
	'use strict'
	angular.module('MyApp')
		.factory('dataRepository', dataFunction)
		
	dataFunction.$inject = ['$http']

	function dataFunction($http){
		var repository = {};
		repository.getPosts = getPosts;
		repository.getComments = getComments;
		return repository;
		
		function getPosts(){
			return $http({
				method: 'GET',
				url: 'https://jsonplaceholder.typicode.com/posts',
				params: '',
				headers: '',
				data: ''
			}).then(success).catch(error);
		}

		function getComments(){
			return $http({
				method: 'GET',
				url: 'https://jsonplaceholder.typicode.com/comments',
				params: '',
				headers: '',
				data: ''
			}).then(success).catch(error);
		}

		function success(response){
			return response.data;
		}

		function error(error){
			console.log("Error: " + error);
		}
	}
})();