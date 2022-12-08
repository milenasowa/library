type Unit = "g" | "ml" | "l"

class Product {
    constructor(name: string, weight: number, value: Unit) {
        this.name = name;
        this.weight = weight;
        this.value = value;
    }
    name: string;
    weight: number;
    value: Unit

}

let listaMagazynowa: Product[] = []

let bread = new Product("chleb", 100, "g");
let water = new Product("woda", 1, "l");
let cola = new Product('cola', 2, 'l');
let cookies = new Product('ciastka', 100, 'g');
let coffee = new Product('kawa', 200, "g");
let juice = new Product(" sok", 3, "l");


listaMagazynowa.push(bread);
listaMagazynowa.push(water);
listaMagazynowa.push(cola);
listaMagazynowa.push(cookies);
listaMagazynowa.push(coffee);
listaMagazynowa.push(juice)


class Shop {
    constructor(name: string, city: string, type: string, productsList: Product[]) {
        this.name = name
        this.city = city
        this.type = type
        this.productsList = productsList
    }
    private name: string
    private city: string
    private type: string
    private productsList: Product[] = []

    getProduct(): Product[] {
        return this.productsList
    }

    addProductToStore(product: Product): void {
        this.productsList.push(product)

    }
    setWarehouseState(aaa: Product[]): void {
        this.productsList = aaa
    }
    moveProductsAfterDelete(productAfterD: Product[]) {
        this.productsList = productAfterD
    }

}
let biedronkaListaProduktów: Product[] = [];
biedronkaListaProduktów.push(bread)
biedronkaListaProduktów.push(coffee)
let biedronka = new Shop('biedronka', 'Poznan', 'dyskont', biedronkaListaProduktów)

let auchanListaProduktów: Product[] = []
auchanListaProduktów.push(cola);
auchanListaProduktów.push(water)
let auchan = new Shop('auchan', 'Warszawa', 'male', auchanListaProduktów)






/**Robi: dodawanie nowego produktu do listy produktów w danym sklepie biedronka
 * 1.wziąc liste magazynowa
 * 2. wyszukać na liscie magazynowej produkt mający name === parametr funcji 
 * 3. sprawdzić czy szukany produkt istnieje
 * a) istnieje, to dodać produkt do biedronki  za pomoca funkcji add product to store
 * b) nie istnieje - alert "nie ma takiego produktu"
 * 
 */
function addProductToShop(productName: string) {
    let szukanyProdukt: Product

    listaMagazynowa.forEach((cos: Product) => {
        if (cos.name === productName) {
            szukanyProdukt = cos
        }
    });

    if (szukanyProdukt !== null) {
        biedronka.addProductToStore(szukanyProdukt)
    } else {
        alert("nie znaleziono")
    }
    console.log(biedronka)
}


/** Robi: usunięcie produktu z listy produktów w danym sklepie
 * 1.utworzenie pustej listy w celu przechowania elementów pozostałych po usunięciu jednego
 * 2.literowanie po biedronka.lista produktów w celu zadecydowania czy produkt ma być usunięty czy zostawiony
 * a) jesli element ma tytuł === tytułowi z parametru funcji to nic
 * b) jesli element ma tytuł rózny od tutuły z parametru to dodaj go do pusta tymczasowa lista
 * 3) przypidanie poczatkowo pustej listy do biedronka.lista produktów
 */
function deleteProductFromShop(productName: string) {
    let produktyPoUsunieciu: Product[] = []

    biedronka.getProduct().forEach((product: Product) => {
        if (product.name === productName) {

        } else {
            produktyPoUsunieciu.push(product)
        }



    })
    biedronka.setWarehouseState(produktyPoUsunieciu)
    console.log(biedronka)

}
/**Robi: sprawdzenie czy w danym sklepie istnieje produkt o określonych parametrach
 * 
 * funkcja ta okresla czy dany produkt istnieje w biedronce
 * 1. utworzyć nową zmienną typu bulean
 * 2. iterować po liście produktów sklepu biedronka
 * 3. jeśli w biedronce istnieje produkt o nazwie === product name to 
 * - sprawdzone = true
 * 4. w console log wyswietlic sprawdzone
 */
function checkProduct(productName: string) {

    let sprawdzone: boolean = false

    biedronka.getProduct().forEach((product) => {
        if (product.name === productName) {
            sprawdzone = true
        }

    })

    if (sprawdzone === false) {
        alert('nie ma takiego poduktu')
    }

    console.log(sprawdzone)
}
/** Robi: sprawdzenie czy w danym sklepie występuje produkt o danych unitach
 * 1. 
 * 2. iterowaie po lista magazynowa
 * a) jeśli element ma value: unit === "l" to dodaj do pustej utworzonej listy
 * 3. wyswietl zawartosc w console log
 */
function iloscProduktowLitry() {
    let produktyOkresloneValue: Product[] = []

    listaMagazynowa.forEach((produktZValue: Product) => {
        if (produktZValue.value === 'l') {
            produktyOkresloneValue.push(produktZValue)
        }
    })

    console.log(produktyOkresloneValue)

}
/**
 * funkcja ktora zwroci produkty z wartością wieksza lub równa dwa litry
 */
function iloscProduktowWiekszychLubRownych() {
    let wiekszeLubRowne: Product[] = []

    listaMagazynowa.forEach((productWeight: Product) => {
        if (productWeight.weight >= 2 && productWeight.value === 'l') {
            wiekszeLubRowne.push(productWeight)
        }
    })
    console.log(wiekszeLubRowne)
}

/**Robi: wyświetlenie informacji o produkcie z listy magazynowej na podstawie nazwy produktu
 * 1. utworzyć pustą zmienną, w celu przypisania do niej wyszukanego produktu
 * 2. iterować po liście magazynowej 
 * 3. jeśli nazwa produktu jest równa productName to przypisz to do nowo utworzonej zmiennej
 * 4. wyswietl w console log zawartośc nowej zmiennej
 * 
 */
function showProductInformaction(productName: string) {

    console.log(productName)
}
/** Robi: wyświetlenie zawartości sklepu biedronka
 * 
 */
function showBiedronka() {
    console.log(biedronka)
}
/**
 *Robi:  wyświetlenie zawartości sklepu auchan
 */
function showAuchan() {
    console.log(auchan)
}
/**Robi: Przeniesienie określonego produktu między sklepami
 * 1. utworzyc nową pustą zmienną
 * 2. odnaleźć produkt w sklepie biedronka
 * 3. jesli  naztywa produkt równa się nazwie uzytej w parametrze funkcji to przypisac go do zmiennej
 * 4. jesli zmienna jest rozna od null to dodaj go do listy towarow w drugim sklepie
 * 5. usunąć produkt z biedronki 
 */
function moveProductsBetweenShops(productName: string) {

    let produktDoPrzeniesienia: Product
    let listaPoUsunieciu: Product[] = []

    biedronka.getProduct().forEach((product: Product) => {
        if (product.name === productName) {
            produktDoPrzeniesienia = product
        }

    })
    if (produktDoPrzeniesienia !== null) {
        auchan.addProductToStore(produktDoPrzeniesienia)
    }

    biedronka.getProduct().forEach((product: Product) => {
        if (product.name !== productName) {
            listaPoUsunieciu.push(product)
        }
        biedronka.moveProductsAfterDelete(listaPoUsunieciu)

    })

    console.log(auchan, biedronka)
}


