(function(){
	'use strict'
	angular.module('MyApp')
		.controller('PostController', postController)
		.component('postComponent', {
			templateUrl: './components/posts/posts.html',
			controller: 'PostController',
			controllerAs: 'vm'
		})
		

	postController.$inject = ['dataService'];
	function postController(dataService){
		var vm = this;
		vm.$onInit = onInit;
		
		function onInit(){
			dataService.getPosts().then(function(data){
				vm.posts = data;
			});

			dataService.getComments().then(function(data){
				vm.comments = data;
			});	
		}
	}
})();