type Unit = "g" | "ml" | "l"

class Product {

    constructor(name: string, weight: number, value: Unit, packed: boolean) {
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
let listaMagazynowa: Product[] = []

let bread: Product = new Product("chleb", 200, "g", true);
let cola: Product = new Product("cola", 2, "l", true);
let butter: Product = new Product("masło", 250, "g", true);
let milk: Product = new Product("mleko", 1, "l", false);
let chocolade: Product = new Product("czekolada", 100, "g", true);
let water: Product = new Product("woda", 1.5, "l", true)

listaMagazynowa.push(bread);
listaMagazynowa.push(cola);
listaMagazynowa.push(butter);
listaMagazynowa.push(milk);
listaMagazynowa.push(chocolade);
listaMagazynowa.push(water);





class Shop {
    constructor(name: string, city: string, listOfProducts: Product[]) {
        this.name = name;
        this.city = city;
        this.listOfProducts = listOfProducts;

    }
    private name: string;
    private city: string;
    private listOfProducts: Product[] = []

    getProducts(): Product[] {
        // sprawdzic czy ten uzytkownik ma uprawnienia do pobrania produktow
        return this.listOfProducts
    }

    /**
     *1. this.list of products i iterowac po tym
      2. jesli iterowany element.name  jest równy product name to      
     */

    productExist(productName: string): boolean {
        let result: boolean = false
    
        this.listOfProducts.forEach((element)=>{
            if (element.name === productName) {
                result = true
            
            } 
        })
        

        return result
    }

    setProducts(newListOfProducts: Product[]): void {
        this.listOfProducts = newListOfProducts;
    }

    /**
     * 
     * 
     */
    addProductToStore(product: Product): void {
        this.listOfProducts.push(product)
    }
    

}
let biedronkaListOfProducts: Product[] = [cola, butter, bread];
let miliczListOfProduct: Product[] = [milk, chocolade, water]
let biedronka: Shop = new Shop("Biedronka", "Szamotuły", biedronkaListOfProducts);
let auchan: Shop = new Shop("Auchan", "Milicz", miliczListOfProduct);
/**
 * 1.utworzyc liste magazynowa
 * 2. wyszukać na liscie magazynowej produkt mający name === parametr funcji 
 * 3. sprawdzić czy szukany produkt istnieje
 * a) istnieje, to dodać produkt do biedronki produkt za pomoca funkcji add product to store
 * b) nie istnieje - alert "nie ma takiego produktu"
 * 
 */
function addProductToShop(product: string) {
    let szukanyProdukt: Product;


    listaMagazynowa.forEach((item: Product) => {
        if (item.name === product) {
            szukanyProdukt = item
        }
    })


    if (szukanyProdukt != null) {
        biedronka.addProductToStore(szukanyProdukt)
    } else {
        alert('Nie ma takiego produktu')
    }

}

/**
 * 1.utworzenie pustej listy w celu przechowania elementów pozostałych po usunięciu jednego
 * 2.literowanie po biedronka.lista produktów w celu zadecydowania czy produkt ma być usunięty czy zostawiony
 * a) jesli element ma tytuł === tytułowi z parametru funcji to nic
 * b) jesli element ma tytuł rózny od tutuły z parametru to dodaj go do pusta tymczasowa lista
 * 3) przypidanie poczatkowo pustej listy do biedronka.lista produktów
 */
function deleteProductFromShop(name: string) {

    let produktyDoZostawienia: Product[] = []
    let produktyBiedronki = biedronka.getProducts();
    produktyBiedronki.forEach((rzecz) => {
        if (rzecz.name !== name) {
            produktyDoZostawienia.push(rzecz)
        }
    })
    biedronka.setProducts(produktyDoZostawienia)
    console.log(biedronka)
}
/**
 * 
 * funkcja ta okresla czy dany produkt istnieje w biedronce
 */
function checkProduct(name:string){
    debugger
    let produktIstnieje: boolean = biedronka.productExist(name)
    
        
    console.log(produktIstnieje)
}
/**
 * 1. 
 * 2. iterowaie po lista magazynowa
 * a) jeśli element ma value: unit === "l" to dodaj do pustej utworzonej listy
 * 3. wyswietl zawartosc w console log
 */
function iloscProduktowLitry(){
   
    let valueProduktu: Product[] = []
    let produkty = auchan.getProducts();


    produkty.forEach((poValue)=>{
       if (poValue.value === "l"){
        valueProduktu.push(poValue)
       }
    })
    
    console.log(valueProduktu )

}
