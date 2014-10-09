bookMonkey.controller('BookDetailsCtrl', function($scope) {
	$scope.book = {
		title : 'Mein Titel',
		subtitle: '...Untertitel',
		isbn: '987-54321',
		pages : 123,
		author : 'Irgendein Autor',
		publisher : 'Verleger'
	};
});