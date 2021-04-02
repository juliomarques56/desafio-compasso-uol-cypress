/// <reference types="cypress" />

import product from '../../product.json'

import HomePage from '../pages/HomePage'
const homePage = new HomePage

let message = "Product successfully added to your shopping cart"

Given("que acesso o site {}", (site) => {
	homePage.acessarSite(site);
});

And("pesquiso pelo conteudo Faded Short Sleeve", () => {
    homePage.searchProduct(product.name);
});

When("adiciono o primeiro produto retornado pela pesquisa", () => {
    homePage.clickAddProductShorCart();
    homePage.checkSuccessMessage(message);
    homePage.checkNameProductSuccesLayer(product.name);
    homePage.ClickCloseLayer();
    homePage.clickOpenShopCart();
});
