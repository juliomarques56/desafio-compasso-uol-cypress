/// <reference types="cypress" />

import ProductDetailsPage from '../pages/ProductDetailsPage'
const productDetailsPage = new ProductDetailsPage


When("eu adiciono o produto ao carrinho de compras", () => {

	productDetailsPage.ClickAddProductShorCart();
	productDetailsPage.checkSuccessMessage('Product successfully added to your shopping cart');
	productDetailsPage.checkNameProductSuccesLayer('Faded Short Sleeve');
	productDetailsPage.ClickCloseLayer();

});
