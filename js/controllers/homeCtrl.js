angular.module('smartApp')
.controller('homeCtrl', function($scope, mainService) {
	
	window.scrollTo(0, 0);
	
	var getWeather = function() {
		mainService.getWeather().then(function(response) {
			$scope.weather = response.data.forecast.simpleforecast.forecastday[0];
			console.log($scope.weather);
		});
	};
	
	getWeather();
	
	$(".fade-pic1").hover(function(){
		$(".fade-pic1 img").stop().animate({ opacity: 0 }, 'slow');
	}, function() {
		$(".fade-pic1 img").stop().animate({ opacity: 1 }, 'slow');
	});
	
	$(".fade-pic2").hover(function(){
		$(".fade-pic2 img").stop().animate({ opacity: 0 }, 'slow');
	}, function() {
		$(".fade-pic2 img").stop().animate({ opacity: 1 }, 'slow');
	});
	
	$(".fade-pic3").hover(function(){
		$(".fade-pic3 img").stop().animate({ opacity: 0 }, 'slow');
	}, function() {
		$(".fade-pic3 img").stop().animate({ opacity: 1 }, 'slow');
	});
	
	$(".fade-pic4").hover(function(){
		$(".fade-pic4 img").stop().animate({ opacity: 0 }, 'slow');
	}, function() {
		$(".fade-pic4 img").stop().animate({ opacity: 1 }, 'slow');
	});
	
});
