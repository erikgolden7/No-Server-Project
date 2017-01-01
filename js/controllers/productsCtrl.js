angular.module('smartApp')
.controller('productsCtrl', function($scope, productService) {
	
window.scrollTo(0,0);
	
$scope.products = productService.products;
	
	
});