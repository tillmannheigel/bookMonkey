describe("Book List", function(){
	beforeEach(function(){
		browser().navigateTo("#/books");
		browser().reload();
	});
	
	var selector = 'table.bm-book-list tr';
	
	it("should have n elements", function(){
		expect(repeater(selector).count()).toEqual(3);
	});
});
