"use strict";
// u1
// u2
function addBookToLibrary() {
    // ??
    console.log("add to library");
}
// u3
function deleteBookFromLibrary() {
    // ??
    console.log("delete book");
}
// u4
function showListOfLibrary() {
    // ??
    console.log("show list of books");
}
// u5
function moveBooksBetweenLibrary() {
    // ??
    console.log("move book");
}
// u6
class Book {
    //u8, u14, u20, u26, u32, u38
    constructor(title, author, numberOfPages) {
        // u9, u15, u21, u27, u33, u39
        this.title = title;
        // u10, u16, u22, u28, u34, u40
        this.author = author;
        // u11, u17, u23, u29, u35, u41
        this.numberOfPages = numberOfPages;
        //12,u18,u24, u30, u36, u42
    }
}
// u-7
let aniaZZielonegoWzgorza = new Book("Ania z Zielonego Wzgórza", "L.Mound-Montgomery", 700);
// u13
let perswazje = new Book("Perswazje", "Jane Austen", 550);
// u19
let shrek = new Book("Shrek", "J.Talkien", 300);
// u25
let potop = new Book("Potop", "Sienkiewicz", 1000);
// u31
let dziady = new Book("Dziady", "Mickiewicz", 500);
// u-37
let wesele = new Book("Wesele", "Ktoś", 200);
// u-43
class Library {
    // u46, u53
    constructor(name, city, numberOfShelfs, listofBooks) {
        this.listofBooks = [];
        let igor = "jest mistrzem";
        // u47, u54
        this.name = name;
        // u48, u55
        this.city = igor;
        // u49, u56
        this.numberOfShelfs = numberOfShelfs;
        // u50, u57
        this.listofBooks = listofBooks;
        //  u-51 , u58
    }
}
// u-44, 
let list1 = [aniaZZielonegoWzgorza, perswazje];
// u45
let bibliotekaPoznanFantasy = new Library("Biblioteka fantasy", "Poznań", 3, list1);
// u52
let bibliotekaMiliczDrama = new Library("Biblioteka drama", "Milicz", 5, [potop]);
// 59
function showBookInformation() {
    // ??
    console.log(aniaZZielonegoWzgorza);
}
// 60
function showFantasyLibrary() {
    // ??
    console.log(bibliotekaPoznanFantasy);
}
// 61
function showSecondLibrary() {
    //
    console.log(bibliotekaMiliczDrama);
}
//u-61
