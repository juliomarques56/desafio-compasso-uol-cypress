/// <reference types="cypress" />

export default class HomeElements{

    inputSearch() { return '#search_query_top'}
    btnSearch() { return '#searchbox > .button-search'}
    btnAddToCart() { return '.ajax_add_to_cart_button > span'}
    successMessageAddShopCartProduct () { return '#layer_cart > div > div > h2'}
    nameProductSuccessLayer () { return '#layer_cart_product_title'}
    btnCloseLayer() { return 'span[title="Close window"]'}
    shopCart() { return '.shopping_cart > a'}
}