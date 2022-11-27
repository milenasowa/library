"use strict";
class Product {
    constructor(name, weight, value, packed) {
        this.name = name;
        this.weight = weight;
        this.packed = packed;
        this.value = value;
    }
}
let bread = new Product("chleb", 200, "g", true);
let cola = new Product("cola", 2, "l", true);
let butter = new Product("masło", 250, "g", true);
let milk = new Product("mleko", 1, "l", false);
let chocolade = new Product("czekolada", 100, "g", true);
let water = new Product("woda", 1.5, "l", true);
class Shop {
    constructor(name, city, listOfProducts) {
        this.listOfProducts = [];
        this.name = name;
        this.city = city;
        this.listOfProducts = listOfProducts;
    }
}
let biedronkaListOfProducts = [bread, cola, butter];
let miliczListOfProduct = [milk, chocolade, water];
let biedronka = new Shop("Biedronka", "Szamotuły", biedronkaListOfProducts);
let auchan = new Shop("Auchan", "Milicz", miliczListOfProduct);
function addProductToShop(item) {
    // let newProduct: Product = new Product("piwo", 500, "ml", true)
    biedronka.listOfProducts.push(item);
    console.log(biedronka);
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
    biedronka.listOfProducts.forEach((rzecz) => {
        if (rzecz.name !== name) {
            produktyDoZostawienia.push(rzecz);
        }
    });
    biedronka.listOfProducts = produktyDoZostawienia;
    console.log(biedronka);
}
