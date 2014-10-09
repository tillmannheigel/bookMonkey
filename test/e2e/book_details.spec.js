describe("E2E: Book details page", function(){
	
	beforeEach(function() {
		browser().navigateTo('/');
	});
	
	it('should show the correct book title on details page', function() {
		browser().navigateTo('#/books/987-54321');
		expect(element('.bm-book-title').html()).toBe('Mein Titel');
	});
});
