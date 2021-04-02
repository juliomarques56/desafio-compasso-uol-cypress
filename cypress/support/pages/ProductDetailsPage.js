/// <reference types="cypress" />

import ProductDetailsElements from '../elements/ProdutcDetailsElements'
const productDetailsElements = new ProductDetailsElements


export default class ProductDetailsPage {

    ClickAddProductShorCart() {
        cy
            .get(productDetailsElements.btnAddToCart())
            .click();
    }

    checkSuccessMessage(message) {
        cy
            .get(productDetailsElements.successMessageAddShopCartProduct())
            .should('be.visible')
            .invoke('text')
            .should('contain', message)
    }

    checkNameProductSuccesLayer(name) {
        cy
            .get(productDetailsElements.nameProductSuccessLayer())
            .should('be.visible')
            .invoke('text')
            .should('contain', name)
    }

    clickOpenShopCart () {
        cy.
            get(productDetailsElements.shopCart())
            .click()
    }

    ClickCloseLayer() {
        cy
            .get(productDetailsElements.btnCloseLayer())
            .click();
    }

}