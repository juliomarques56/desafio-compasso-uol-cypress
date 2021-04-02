/// <reference types="cypress" />

import ShopCartElements from '../elements/ShopCartElements'
const shopCartElements = new ShopCartElements

export default class ShopCartPage {

    checkNameProduct(name) {
        cy
            .get(shopCartElements.nameProduct())
            .invoke('text')
            .should('contain', name)
    };

    checkUnitPriceProduct(price) {
        cy
            .get(shopCartElements.unitPriceProduct())
            .invoke('text')
            .should('equal', price)
    };

    checkQuantityProduct(quatity) {
        cy
            .get(shopCartElements.quantityProduct())
            .invoke('val')
            .should('equal', quatity)
    };

    checkTotalPriceProduct() {
        cy
            .get(shopCartElements.totalPriceProduct())
            .invoke('text')
            .should('contain', '$16.51')
    };
}