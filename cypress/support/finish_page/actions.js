import { STRINGS } from "./strings"
import { ELEMENTS } from "./elements"

class FinishPage {

    checkTitlePage() {
        cy.get(ELEMENTS.pageTitle).contains(STRINGS.pageTitle)
    }

    checkCompleteOrderMessage() {
        cy.get(ELEMENTS.completeMessage).contains(STRINGS.completeMessage)
    }

    checkDispatchedOrder() {
        cy.get(ELEMENTS.dispatchedMessage).contains(STRINGS.dispatchedMessage)
    }

    checkFinishPageMessages() {
        this.checkTitlePage()
        this.checkCompleteOrderMessage()
        this.checkDispatchedOrder()
    }
}

export default new FinishPage()