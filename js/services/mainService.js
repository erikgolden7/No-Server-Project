angular.module('smartApp')
.service('mainService', function($http) {
	
	this.getWeather = function() {
		return $http({
			method: 'GET',
			url: 'http://api.wunderground.com/api/22e474a581a15228/geolookup/conditions/forecast/q/84601.json'
		})
	};
});



