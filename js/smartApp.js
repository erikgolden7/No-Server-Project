angular.module('smartApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/home.html',
		controller: 'homeCtrl'
	})
	.state('products', {
		url: '/products',
		templateUrl: 'views/products.html',
		controller: 'productsCtrl'
	})
	.state('services', {
		url: '/services',
		templateUrl: 'views/services.html',
		controller: 'servicesCtrl'
	})
	.state('about', {
		url: '/about',
		templateUrl: 'views/about.html',
		controller: 'aboutCtrl'
	})
	.state('contact', {
		url: '/contact',
		templateUrl: 'views/contact.html',
		controller: 'contactCtrl'
	})
	
});
