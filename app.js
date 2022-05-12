"use strict";
class Book {
    constructor(title, autor, yearRealease, pages, booked) {
        this.title = title;
        this.autor = autor;
        this.yearRealease = yearRealease;
        this.pages = pages;
        this.booked = booked;
    }
    czytajKsiazke() {
        console.log('Title : ' + this.title);
    }
}
class Library {
    constructor(name, adress) {
        this.listOfBooks = [];
        this.name = name;
        this.adress = adress;
    }
    addBook(book) {
        this.listOfBooks.push(book);
    }
    deleteBook(titleBook) {
        // let newList: Book[] = [];
        this.listOfBooks = this.listOfBooks.filter((value, index, array) => {
            return value.title !== titleBook;
        });
        // this.listOfBooks = newList;
    }
    findBook(titleBook) {
        let result = this.listOfBooks.find((book, index, array) => {
            return book.title === titleBook;
        });
        return result;
    }
}
let library = new Library("Ump", "Poznań");
let library2 = new Library("Uam", "Warszawa");
function addBookToLibrary() {
    let harryPotter = new Book("Harry potter", "J.K Rowling", 2000, 950, false);
    harryPotter.czytajKsiazke();
    let wladcaPierscieni = new Book("Władca pierścienia", "xyz", 1997, 652, false);
    wladcaPierscieni.czytajKsiazke();
    library.addBook(harryPotter);
    library.addBook(wladcaPierscieni);
}
function deleteBookFromLibrary() {
    library.deleteBook('Harry potter');
}
function showListOfLibrary() {
    console.log(library);
    console.log(library2);
}
function moveBooksBetweenLibrary() {
    let znalezione = library.findBook("Harry potter");
    if (znalezione !== undefined) {
        library.deleteBook(znalezione === null || znalezione === void 0 ? void 0 : znalezione.title);
        library2.addBook(znalezione);
    }
    else {
        alert("nie ma książki");
    }
}
