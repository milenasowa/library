type Unit = "g" | "ml" | "l"

class Product {
    
    constructor(name:string, weight: number, value: Unit, packed: boolean ){
     this.name = name;
     this.weight = weight;
     this.packed = packed;
     this.value = value
    }
    name: string;
    weight: number;
    packed: boolean;
    value: Unit
    
}
let bread:Product = new Product ("chleb", 200, "g", true);
let cola: Product = new Product("cola", 2, "l", true);
let butter:Product = new Product("masło", 250, "g", true);
let milk:Product = new Product("mleko", 1, "l", false);
let chocolade:Product = new Product("czekolada", 100,"g", true);
let water:Product = new Product("woda", 1.5, "l", true)

class Shop {
    constructor(name: string, city:string, listOfProducts:Product[] ){
        this.name = name;
        this.city = city;
        this.listOfProducts = listOfProducts;

    }
    name:string;
    city:string;
    listOfProducts: Product[] = []

}
let biedronkaListOfProducts: Product[] = [bread, cola, butter];
let miliczListOfProduct: Product[]=[milk, chocolade, water]
let biedronka: Shop = new Shop("Biedronka", "Szamotuły", biedronkaListOfProducts);
let auchan: Shop = new Shop("Auchan", "Milicz", miliczListOfProduct);

function addProductToShop(item: Product){
// let newProduct: Product = new Product("piwo", 500, "ml", true)
 
biedronka.listOfProducts.push(item)
console.log(biedronka)

}
/**
 * 1.utworzenie pustej listy w celu przechowania elementów pozostałych po usunięciu jednego
 * 2.literowanie po biedronka.lista produktów w celu zadecydowania czy produkt ma być usunięty czy zostawiony
 * a) jesli element ma tytuł === tytułowi z parametru funcji to nic
 * b) jesli element ma tytuł rózny od tutuły z parametru to dodaj go do pusta tymczasowa lista
 * 3) przypidanie poczatkowo pustej listy do biedronka.lista produktów
 */ 
function deleteProductFromShop(name:string){
    
    let produktyDoZostawienia: Product[] = []
    biedronka.listOfProducts.forEach((rzecz)=>{
        if (rzecz.name !== name) {
          produktyDoZostawienia.push(rzecz)
        }
        })
        biedronka.listOfProducts = produktyDoZostawienia
        console.log(biedronka)
}
