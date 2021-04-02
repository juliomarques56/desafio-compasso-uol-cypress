/// <reference types="cypress" />


export default class ProductDetailElements{

    btnAddToCart() { return '#add_to_cart > button'}
    successMessageAddShopCartProduct () { return '#layer_cart > div > div > h2'}
    nameProductSuccessLayer () { return '#layer_cart_product_title'}
    btnCloseLayer() { return 'span[title="Close window"]'}

}




