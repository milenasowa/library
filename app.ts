
function addBookToLibrary (){
    console.log("add to library")
}
function deleteBookFromLibrary(){
    console.log("delete book")
}
function showListOfLibrary() {
    console.log("show list of books")
}
function moveBooksBetweenLibrary(){
    console.log("move book")
}
class Book {
    constructor(title: string, author: string, numberOfPages: number){
     this.title = title;
     this.author= author;
     this.numberOfPages=numberOfPages;
    }
    title: string;
    author: string;
    numberOfPages: number
    
}
let aniaZZielonegoWzgorza = new Book ("Ania z Zielonego Wzgórza","L.Mound-Montgomery", 700);
let perswazje = new Book ("Perswazje", "Jane Austen", 550);
let shrek = new Book ( "Shrek", "J.Talkien", 300);
let potop = new Book ("Potop", "Sienkiewicz", 1000);
let dziady = new Book ("Dziady", "Mickiewicz", 500);
let wesele = new Book ("Wesele", "Ktoś", 200);

class Library {
    constructor(name:string, city:string, numberOfShelfs: number){
        this.name = name;
        this.city = city;
        this.numberOfShelfs = numberOfShelfs;
        
    }
    name: string;
    city: string;
    numberOfShelfs : number;

    listOfFantasyBooks : any = [
        aniaZZielonegoWzgorza,
        perswazje,
        shrek,
   ]
   
    
}
let bibliotekaPoznanFantasy = new Library ("Biblioteka fantasy", "Poznań", 3);
let bibliotekaMiliczDrama = new Library ("Biblioteka drama", "Milicz", 5);

function showBookInformation() {
    console.log(aniaZZielonegoWzgorza)
}




function showFantasyLibrary(){
    console.log(bibliotekaPoznanFantasy)
   
    

}