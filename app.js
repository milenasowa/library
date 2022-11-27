"use strict";
class Product {
    constructor(name, weight, value, packed) {
        this.name = name;
        this.weight = weight;
        this.packed = packed;
        this.value = value;
    }
}
let listaMagazynowa = [];
let bread = new Product("chleb", 200, "g", true);
let cola = new Product("cola", 2, "l", true);
let butter = new Product("masło", 250, "g", true);
let milk = new Product("mleko", 1, "l", false);
let chocolade = new Product("czekolada", 100, "g", true);
let water = new Product("woda", 1.5, "l", true);
listaMagazynowa.push(bread);
listaMagazynowa.push(cola);
listaMagazynowa.push(butter);
listaMagazynowa.push(milk);
listaMagazynowa.push(chocolade);
listaMagazynowa.push(water);
class Shop {
    constructor(name, city, listOfProducts) {
        this.listOfProducts = [];
        this.name = name;
        this.city = city;
        this.listOfProducts = listOfProducts;
    }
    getProducts() {
        // sprawdzic czy ten uzytkownik ma uprawnienia do pobrania produktow
        return this.listOfProducts;
    }
    /**
     *1. this.list of products i iterowac po tym
      2. jesli iterowany element.name  jest równy product name to
     */
    productExist(productName) {
        let result;
        this.listOfProducts.forEach((element) => {
            if (element.name === productName) {
                result = true;
            }
            else {
                result = false;
            }
        });
        return result;
    }
    setProducts(newListOfProducts) {
        this.listOfProducts = newListOfProducts;
    }
    /**
     *
     *
     */
    addProductToStore(product) {
        this.listOfProducts.push(product);
    }
}
let biedronkaListOfProducts = [cola, butter, bread];
let miliczListOfProduct = [milk, chocolade, water];
let biedronka = new Shop("Biedronka", "Szamotuły", biedronkaListOfProducts);
let auchan = new Shop("Auchan", "Milicz", miliczListOfProduct);
/**
 * 1.utworzyc liste magazynowa
 * 2. wyszukać na liscie magazynowej produkt mający name === parametr funcji
 * 3. sprawdzić czy szukany produkt istnieje
 * a) istnieje, to dodać produkt do biedronki produkt za pomoca funkcji add product to store
 * b) nie istnieje - alert "nie ma takiego produktu"
 *
 */
function addProductToShop(product) {
    let szukanyProdukt;
    listaMagazynowa.forEach((item) => {
        if (item.name === product) {
            szukanyProdukt = item;
        }
    });
    if (szukanyProdukt != null) {
        biedronka.addProductToStore(szukanyProdukt);
    }
    else {
        alert('Nie ma takiego produktu');
    }
}
/**
 * 1.utworzenie pustej listy w celu przechowania elementów pozostałych po usunięciu jednego
 * 2.literowanie po biedronka.lista produktów w celu zadecydowania czy produkt ma być usunięty czy zostawiony
 * a) jesli element ma tytuł === tytułowi z parametru funcji to nic
 * b) jesli element ma tytuł rózny od tutuły z parametru to dodaj go do pusta tymczasowa lista
 * 3) przypidanie poczatkowo pustej listy do biedronka.lista produktów
 */
function deleteProductFromShop(name) {
    let produktyDoZostawienia = [];
    let produktyBiedronki = biedronka.getProducts();
    produktyBiedronki.forEach((rzecz) => {
        if (rzecz.name !== name) {
            produktyDoZostawienia.push(rzecz);
        }
    });
    biedronka.setProducts(produktyDoZostawienia);
    console.log(biedronka);
}
/**
 *
 * funkcja ta okresla czy dany produkt istnieje w biedronce
 */
function checkProduct(name) {
    let produktIstnieje = biedronka.productExist(name);
    console.log(produktIstnieje);
}
