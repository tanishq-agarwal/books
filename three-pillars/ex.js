class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()`
	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}
	
	printFavoriteBooks() {
		console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);//prints out 3(string type)
		for (let bookName of this.favoriteBooks) {
			console.log(bookName);
		}
	}
}
function loadBooks(theBookshelf) {
	fakeAjax(BOOK_API,function onBooks(bookNames){
		for(let bookName of bookNames){
			theBookshelf.addFavoriteBook(bookName);
		}
		theBookshelf.printFavoriteBooks();
	});
}

var BOOK_API = "https://some.url/api";

var myBooks= new Bookshelf();
loadBooks(myBooks);

function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}












/*OUTPUT
Favorite Books: 3
 A Song of Ice and Fire
 Crime & Punishment
 You Don't Know JS
*/