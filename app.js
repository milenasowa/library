"use strict";
/**Robi: dodawanie nowego produktu do listy produktów w danym sklepie
 * 1.utworzyc liste magazynowa
 * 2. wyszukać na liscie magazynowej produkt mający name === parametr funcji
 * 3. sprawdzić czy szukany produkt istnieje
 * a) istnieje, to dodać produkt do biedronki produkt za pomoca funkcji add product to store
 * b) nie istnieje - alert "nie ma takiego produktu"
 *
 */
function addProductToShop(product) {
    console.log(product);
}
/** Robi: usunięcie produktu z listy produktów w danym sklepie
 * 1.utworzenie pustej listy w celu przechowania elementów pozostałych po usunięciu jednego
 * 2.literowanie po biedronka.lista produktów w celu zadecydowania czy produkt ma być usunięty czy zostawiony
 * a) jesli element ma tytuł === tytułowi z parametru funcji to nic
 * b) jesli element ma tytuł rózny od tutuły z parametru to dodaj go do pusta tymczasowa lista
 * 3) przypidanie poczatkowo pustej listy do biedronka.lista produktów
 */
function deleteProductFromShop(name) {
    console.log(name);
}
/**Robi: sprawdzenie czy w danym sklepie istnieje produkt o określonych parametrach
 *
 * funkcja ta okresla czy dany produkt istnieje w biedronce
 */
function checkProduct(name) {
    console.log(name);
}
/** Robi: sprawdzenie czy w danym sklepie występuje produkt o danych unitach
 * 1.
 * 2. iterowaie po lista magazynowa
 * a) jeśli element ma value: unit === "l" to dodaj do pustej utworzonej listy
 * 3. wyswietl zawartosc w console log
 */
function iloscProduktowLitry() {
    console.log("aaaa");
}
/**Robi: wyświetlenie informacji o danym produkcie
 *
 */
function showProductInformaction() {
    console.log("product information");
}
/** Robi: wyświetlenie zawartości sklepu biedronka
 *
 */
function showBiedronka() {
    console.log('pokazuję biedronkę');
}
/**
 *Robi:  wyświetlenie zawartości sklepu auchan
 */
function showAuchan() {
    console.log('pokazuję Auchan');
}
/**Robi: Przeniesienie określonego produktu między sklepami
 *
 */
function moveProductsBetweenShops() {
    console.log('przenoszę');
}
