/// <reference types="cypress" />


import HomeElements from '../elements/HomeElements'
const homeElements = new HomeElements


export default class HomePage {
    acessarSite(url) {
        cy.visit(url + 'index.php');
    };

    searchProduct(search) {
        cy
            .get(homeElements.inputSearch())
            .type(search);
        
            cy
            .get(homeElements.btnSearch())
            .click();
    };

    clickAddProductShorCart() {
        cy
            .get(homeElements.btnAddToCart())
            .first()
            .click({force: true});
    };

    checkSuccessMessage(message) {
        cy.wait(1000);
        cy
            .get(homeElements.successMessageAddShopCartProduct())
            .should('be.visible')
            .invoke('text')
            .should('contain', message)
    };

    checkNameProductSuccesLayer(name) {
        cy
            .get(homeElements.nameProductSuccessLayer())
            .should('be.visible')
            .invoke('text')
            .should('contain', name)
    };

    ClickCloseLayer() {
        cy
            .get(homeElements.btnCloseLayer())
            .click();
    };

    clickOpenShopCart () {
        cy.
            get(homeElements.shopCart())
            .click()
    };
}