
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
   czytajKsiazke(){
       console.log('Title : ' + this.title)
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

    deleteBook(titleBook: string): void {
        // let newList: Book[] = [];
        this.listOfBooks = this.listOfBooks.filter((value: Book, index: number, array: Book[]) => {
            return value.title !== titleBook
        })
        // this.listOfBooks = newList;

    }
    findBook(titleBook: string): Book | undefined {
        let result = this.listOfBooks.find((book: Book, index: number, array: Book[]) => {
            return book.title === titleBook
        })
        return result
    }

}

let library: Library = new Library("Ump", "Poznań")
let library2: Library = new Library("Uam", "Warszawa")




function addBookToLibrary(): void {
    let harryPotter: Book = new Book("Harry potter", "J.K Rowling", 2000, 950, false)
    harryPotter.czytajKsiazke();

    let wladcaPierscieni: Book = new Book("Władca pierścienia", "xyz", 1997, 652, false)
    wladcaPierscieni.czytajKsiazke()

    library.addBook(harryPotter);
    library.addBook(wladcaPierscieni);
}

function deleteBookFromLibrary(): void {
    library.deleteBook('Harry potter')

}
function showListOfLibrary(): void {
    console.log(library);
    console.log(library2)
}
function moveBooksBetweenLibrary(): void {
    let znalezione: Book | undefined = library.findBook("Harry potter");
    if (znalezione !== undefined) {
        library.deleteBook(znalezione?.title);
        library2.addBook(znalezione)
    } else {
        alert("nie ma książki")
    }
}


