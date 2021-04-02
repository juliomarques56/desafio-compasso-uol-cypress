/// <reference types="cypress" />

export default class ShopCartElements {

    nameProduct() { return '.product-name > a'}
    unitPriceProduct() { return '.cart_unit > span >span.price'}
    quantityProduct() { return '.cart_quantity > input.cart_quantity_input'}
    totalPriceProduct() { return '.cart_total >span.price'}


}