(function(){
	'use strict'
	angular.module('MyApp', ['ui.router']).config(configuration);
	function configuration($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('Add', {
				url: '/home',
				component: 'postComponent'
			})
	}
})();