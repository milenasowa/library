"use strict";
function addBookToLibrary() {
    console.log("add to library");
}
function deleteBookFromLibrary() {
    console.log("delete book");
}
function showListOfLibrary() {
    console.log("show list of books");
}
function moveBooksBetweenLibrary() {
    console.log("move book");
}
class Book {
    constructor(title, author, numberOfPages) {
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
    }
}
let aniaZZielonegoWzgorza = new Book("Ania z Zielonego Wzgórza", "L.Mound-Montgomery", 700);
let perswazje = new Book("Perswazje", "Jane Austen", 550);
let shrek = new Book("Shrek", "J.Talkien", 300);
let potop = new Book("Potop", "Sienkiewicz", 1000);
let dziady = new Book("Dziady", "Mickiewicz", 500);
let wesele = new Book("Wesele", "Ktoś", 200);
class Library {
    constructor(name, city, numberOfShelfs) {
        this.name = name;
        this.city = city;
        this.numberOfShelfs = numberOfShelfs;
    }
}
// let listOfComedyBooks  = [
//     potop,
//     dziady,
// ]
// let listOfFantasyBooks = [
// aniaZZielonegoWzgorza,
// perswazje,
// shrek,
// ]
let bibliotekaPoznanFantasy = new Library("Biblioteka fantasy", "Poznań", 3);
let bibliotekaMiliczDrama = new Library("Biblioteka drama", "Milicz", 5);
function showBookInformation() {
    console.log(aniaZZielonegoWzgorza);
}
function showFantasyLibrary() {
    console.log(bibliotekaPoznanFantasy);
}
function showSecondLibrary() {
    console.log(bibliotekaPoznanFantasy, bibliotekaMiliczDrama);
}
class toy {
    constructor(name) {
        this.listOfToys = [];
        this.name = name;
        this.listOfToys.push("misiowate");
    }
}
let mis = new toy("Miś");
console.log(mis);
