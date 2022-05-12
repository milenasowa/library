
class Book {
    title: string;
    autor: string;
    yearRealease: number;
    pages: number;
    booked: boolean;

    constructor(title: string, autor: string, yearRealease: number, pages: number, booked: boolean) {
        this.title = title;
        this.autor = autor;
        this.yearRealease = yearRealease;
        this.pages = pages;
        this.booked = booked;
    }

}
class Library {
    name: string;
    adress: string;
    listOfBooks: Book[] = [];

    constructor(name: string, adress: string) {
        this.name = name;
        this.adress = adress;
    }

    addBook(book: Book): void {
        this.listOfBooks.push(book)
    }

    deleteBook( titleBook:string) {
        let newList: Book [] = []; 
        newList = this.listOfBooks.filter(  (value: Book,index: number, array:Book[]) => {
                    return value.title !== titleBook
        })
        this.listOfBooks = newList;
    }

}

let library: Library = new Library ("Ump", "Poznań")
let library2: Library = new Library ("Uam", "Warszawa")




function addBookToLibrary (): void {
    let harryPotter: Book = new Book("Harry potter", "J.K Rowling", 2000, 950, false)
    let wladcaPierscieni: Book = new Book ("Władca pierścienia", "xyz", 1997, 652, false)
    library.addBook ( harryPotter);
    library.addBook ( wladcaPierscieni);
    

}

function deleteBookFromLibrary (): void {
    library.deleteBook('Harry potter')
    
}
function showListOfLibrary () : void {
    console.log (library);
    console.log(library2)
}



