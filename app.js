"use strict";
class Book {
    constructor(title, autor, yearRealease, pages, booked) {
        this.title = title;
        this.autor = autor;
        this.yearRealease = yearRealease;
        this.pages = pages;
        this.booked = booked;
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
        let newList = [];
        newList = this.listOfBooks.filter((value, index, array) => {
            return value.title !== titleBook;
        });
        this.listOfBooks = newList;
    }
}
let library = new Library("Ump", "Poznań");
let library2 = new Library("Uam", "Warszawa");
function addBookToLibrary() {
    let harryPotter = new Book("Harry potter", "J.K Rowling", 2000, 950, false);
    let wladcaPierscieni = new Book("Władca pierścienia", "xyz", 1997, 652, false);
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
