
const elements = require('../product_page/elements.js').ELEMENTS
const strings = require('../product_page/strings.js').STRINGS
import LoginPage from '../login_page/actions.js'
import { ELEMENTS } from '../product_page/elements.js'
import { STRINGS } from '../product_page/strings.js'


class ProductPage {

    checkProdutcTitle(child, title) {
        cy.get(elements.childElement1+child+elements.childElement2).contains(title)
    }
    checkProdutcDescription(child, description) {
        cy.get(elements.childElement1+child+elements.childElement2).contains(description)
    }
    
    checkProductPrice(child, price) {
        cy.get(elements.childElement1+child+elements.childElement2+elements.inventoryPriceBar)
            .contains(STRINGS.dolarSimbol).contains(price)
    }

    pressBtnAddToCart(child) {
        cy.get(elements.childElement1+child+elements.childElement2+elements.inventoryPriceBar+elements.btnAddtoCart).contains(STRINGS.addToCart).click()
    }

    PressBtnRemove(child) {
        cy.get(elements.childElement1+child+elements.childElement2).contains(STRINGS.remove).click()
    }

    selectFilter(filter) {
        cy.get(elements.filter).select(filter)
    }

    selectItem(child, title) {
        cy.get(elements.childElement1+child+elements.childElement2).contains(title).click()
    }

    CheckTitleItemPage(title) {
        cy.get(elements.ItemTitle).contains(title)
    }

    CheckDescriptionItemPage(description) {
        cy.get(elements.ItemDescription).contains(description)
    }

    CheckPriceItemPage(price) {
        cy.get(elements.ItemPrice).contains(price)
    }

    PressBtnBackItemPage() {
        cy.get(elements.btnBackItemPage).click()
    }

    pressBtnAddToCartItemPage() {
        cy.get(elements.btnAddtoCart).click()
    }

    checkCartItens(value) {
        if (value !=0) {
            cy.contains(elements.cartCounter, value)
        }else cy.end()
    }

    checkCart() {
        cy.get(elements.btnCart).should('be.visible')
    }

    pressCart() {
        cy.get(elements.btnCart).click()
    }
    pressBtnRemoveItemPage() {
        cy.get(elements.btnRemove).click()
    }

    checkInventoryContainer() {
        cy.get(elements.inventoryContainer).should('be.visible')
    }

    checkProductListTitle() {
        cy.get(elements.productsListTitle).contains(strings.productsListTitle)
    }

    checkFilter() {
        cy.get(elements.filter).should('be.visible')
    }

    pressAllAddToCart() {
        cy.get(elements.btnAddtoCart).click()
    }
    
}

export default new ProductPage()