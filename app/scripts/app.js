var bookMonkey = angular.module('bookMonkey', ['ngRoute']);

bookMonkey.config(function ($routeProvider){
	$routeProvider 
	.when('/books/:isbn',
	{
		templateUrl: 'templates/book_details.html',
		controller :  'BookDetailsCtrl'
	})
	.when('/books',
	{
		templateUrl: 'templates/book_list.html',
		controller : 'BookListCtrl'
	}
	);
	
});



