type Unit = "g" | "ml" | "l"

class Product {
    constructor ( name: string, weight: number, value: Unit){
        this.name = name;
        this.weight =  weight;
        this.value = value;
    }
     name: string;
     weight: number;
     value: Unit
        
    }

    let  listaMagazynowa: Product[] = []

    let bread = new Product("chleb", 100, "g");
    let water = new Product("woda", 1, "l");
    let cola = new Product('cola', 1.5, 'l');
    let cookies = new Product('ciastka', 100, 'g');
    let coffee = new Product('kawa', 200, "g");
    let juice = new Product (" sok", 500, "ml");

    listaMagazynowa.push(bread);
    listaMagazynowa.push(water);
    listaMagazynowa.push(cola);
    listaMagazynowa.push(cookies);
    listaMagazynowa.push(coffee);
    listaMagazynowa.push(juice)


    class Shop {
        constructor(name: string, city: string, type: string, productsList: Product[]){
            this.name = name
            this.city = city
            this.type = type
            this.productsList = this.productsList
        }
        private name:string
        private city: string
        private type: string
        private productsList: Product[] = []

        getProduct (): Product[] {
          return this.productsList
        }
        
        addProduct(product:Product): void{
            this.productsList = newProductsList

        }
        
    }
    let biedronkaListaProduktów: Product[] = [];
    biedronkaListaProduktów.push(bread)
    biedronkaListaProduktów.push(coffee)
    let biedronka = new Shop('biedronka', 'Poznan','dyskont',biedronkaListaProduktów )

    let auchanListaProduktów: Product[] = []
    auchanListaProduktów.push(cola);
    auchanListaProduktów.push(water)
    let auchan = new Shop('zabka', 'Warszawa', 'male',auchanListaProduktów ) 

    




/**Robi: dodawanie nowego produktu do listy produktów w danym sklepie
 * 1.utworzyc liste magazynowa
 * 2. wyszukać na liscie magazynowej produkt mający name === parametr funcji 
 * 3. sprawdzić czy szukany produkt istnieje
 * a) istnieje, to dodać produkt do biedronki produkt za pomoca funkcji add product to store
 * b) nie istnieje - alert "nie ma takiego produktu"
 * 
 */
function addProductToShop(product: string) {
    

    console.log(product)
}

/** Robi: usunięcie produktu z listy produktów w danym sklepie
 * 1.utworzenie pustej listy w celu przechowania elementów pozostałych po usunięciu jednego
 * 2.literowanie po biedronka.lista produktów w celu zadecydowania czy produkt ma być usunięty czy zostawiony
 * a) jesli element ma tytuł === tytułowi z parametru funcji to nic
 * b) jesli element ma tytuł rózny od tutuły z parametru to dodaj go do pusta tymczasowa lista
 * 3) przypidanie poczatkowo pustej listy do biedronka.lista produktów
 */
function deleteProductFromShop(name: string) {
    console.log(name)
    
}
/**Robi: sprawdzenie czy w danym sklepie istnieje produkt o określonych parametrach
 * 
 * funkcja ta okresla czy dany produkt istnieje w biedronce
 */
function checkProduct(name: string) {
    console.log(name)
}
/** Robi: sprawdzenie czy w danym sklepie występuje produkt o danych unitach
 * 1. 
 * 2. iterowaie po lista magazynowa
 * a) jeśli element ma value: unit === "l" to dodaj do pustej utworzonej listy
 * 3. wyswietl zawartosc w console log
 */
function iloscProduktowLitry() {
   console.log("aaaa")

}

/**Robi: wyświetlenie informacji o danym produkcie
 * 
 */
function showProductInformaction(product:Product){
    
    console.log(product)
}
/** Robi: wyświetlenie zawartości sklepu biedronka
 * 
 */
function showBiedronka(){
    console.log(biedronka)
}
/**
 *Robi:  wyświetlenie zawartości sklepu auchan
 */
function showAuchan(){
    console.log ( auchan )
}
/**Robi: Przeniesienie określonego produktu między sklepami
 * 
 */
function moveProductsBetweenShops(){
    console.log ('przenoszę')
}