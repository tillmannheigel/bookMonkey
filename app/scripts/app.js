var app = angluar.module('bookMonkey', ['ngRoute']);

app.config(function ($routeProvider){
	$routeProvider.when('/books/:isbn'. {
		templareUrl: 'templates/book_details.html',
		controller:  'BookDetailsCtrl'
	});
});
