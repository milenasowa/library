"use strict";
// u1
// u2
function addBookToLibrary() {
    // 
    let ksiazka3 = new Book("kicia Kocia", "Anna Nowak", 20);
    bibliotekaPoznanFantasy.listofBooks.push(ksiazka3);
    console.log(bibliotekaPoznanFantasy);
}
// u3
/**
 * 1. stwofrzyc nowa pusta liste typu book
 * 2. wziac liste ksiazek obecnie umieszczonych w bibliotece poznan fanstasy
 * 3. iterowac po tej liscie
 * 4. jesli element ma tytuł rózny od ania z zielonego wzgórza ro przenies element do nowehj listy
 * 5. zamienic liste obecna z nową listą bez usuwanej ksiazki
 * 6. odswiezoną bibliotekę wyswietlic w console log
 */
function deleteBookFromLibrary(bookTitle) {
    // ??
    let booksForMove = [];
    bibliotekaPoznanFantasy.listofBooks.forEach((book) => {
        if (book.title !== bookTitle) {
            booksForMove.push(book)
        }
    });
    bibliotekaPoznanFantasy.listofBooks = booksForMove;
    console.log(bibliotekaPoznanFantasy)
}
// u4
// u5
/**
 * 1. utworzenie zmiennej tymczasowej typu book
 * 2. utworzenie pustej tymczasowej listy
 * 3. iterowanie po biblioteka poznan fantasy
 * 4. if element.tytuł równa się  ania z zielonego wzgorza to przypisz go do zmiennej tymczasowej
 * 5. else, elementy dodaj do tymczasowej listy ksiazki do przenieseinia
 * 6. do listy ksiazkek biblioteki poznan fantasy dodac listę ksiazki do przeniesienia
 * 7. do bi
 */
function moveBooksBetweenLibrary() {
    // ??
    // let aniaDoPrzeniesienia: Book;
    let ksiazkiDoPrzeniesienia = [];
    bibliotekaPoznanFantasy.listofBooks.forEach((book, i) => {
        if (book.title === "Ania z Zielonego Wzgórza") {
            bibliotekaMiliczDrama.listofBooks.push(book);
        }
        else {
            ksiazkiDoPrzeniesienia.push(book);
        }
    });
    bibliotekaPoznanFantasy.listofBooks = ksiazkiDoPrzeniesienia;
    console.log(bibliotekaPoznanFantasy, bibliotekaMiliczDrama);
}
// function deleteThisBook (title:string){
//     return "usunięto książkę" + title
// }
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
        // u47, u54
        this.name = name;
        // u48, u55
        this.city = city;
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
