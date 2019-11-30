(function(){
	'use strict'
	angular.module('MyApp')
		.controller('CommentController', commentController)
		.component('commentComponent', {
			templateUrl: './components/comments/comments.html',
			controller: 'CommentController',
			controllerAs: 'vm',
			bindings: {
				comment: '='
			}
		})
		

	commentController.$inject = ['dataService'];
	function commentController(dataService){
		var vm = this;
		vm.$onInit = onInit;
		
		function onInit(){
			console.log(vm.comment);
		}
	}
})();