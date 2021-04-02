/// <reference types="cypress" />

import product from '../../product.json'

import ShopCartPage from '../pages/ShopCartPage'
const shopCartPage = new ShopCartPage


Then("o produto e adicioinado no carrinho de compras", () => {
    shopCartPage.checkNameProduct(product.name);
    shopCartPage.checkUnitPriceProduct(product.price);
    shopCartPage.checkQuantityProduct(product.quantity);
    shopCartPage.checkTotalPriceProduct();
});

