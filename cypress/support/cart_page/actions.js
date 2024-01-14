
import { ELEMENTS } from "./elements"
import { STRINGS } from "./strings"

class CartPage {

        checkProductName(name) {
            cy.get(ELEMENTS.itemName).contains(name)
        }

        checkProductDescription(description) {
            cy.get(ELEMENTS.itemDescription).contains(description)
        }
        
        checkProductPrice(price) {
            cy.get(ELEMENTS.itemPrice).contains(price)
        }

        checkBtnRemove() {
            cy.get(ELEMENTS.btnSecondary).contains(STRINGS.btnRemove)
        }

        pressBtnRemove() {
            cy.get(ELEMENTS.btnSecondary).contains(STRINGS.btnRemove).click()
        }

        pressbtnCheckout() {
            cy.get(ELEMENTS.btnCheckout).contains(STRINGS.btnCheckout).click()
        }

        pressbtnContinueShopping() {
            cy.get(ELEMENTS.btnSecondary).contains(STRINGS.btnContinueShopping).click()
        }        
}


export default new CartPage()