import { STRINGS } from "../checkout_page/strings"
import { ELEMENTS } from "./elements"

class CheckoutPage {

    checkFirstNameField() {
        cy.get(ELEMENTS.inputFirstName).should('be.be.visible')
    }

    checkLastNameField() {
        cy.get(ELEMENTS.inputLastName).should('be.be.visible')
    }

    checkPostalCodeField() {
        cy.get(ELEMENTS.inputPostalCode).should('be.be.visible')
    }

    typeFirstName(firstName) {
        cy.get(ELEMENTS.inputFirstName).type(firstName)
    }

    typeLastName(lastName) {
        cy.get(ELEMENTS.inputLastName).type(lastName)
    }

    typePostalCode(postalCode) {
        cy.get(ELEMENTS.inputPostalCode).type(postalCode)
    }

    pressBtnContinue() {
        cy.get(ELEMENTS.btnContinue).contains(STRINGS.btnContinue).click()
    }

    checkBtnContinue() {
        cy.get(ELEMENTS.btnContinue).contains(STRINGS.btnContinue)
    }

    pressBtnCancel() {
        cy.get(ELEMENTS.btnCancel).contains(STRINGS.btnCancel).click()
    }

    checkPageTitle(page) {
        cy.get(ELEMENTS.pageTitle).contains(page)
    }

    checkColumnQtyTitle() {
        cy.get(ELEMENTS.columnQtyTitle).contains(STRINGS.columnQtyTitle)
    }
    checkColumnDescriptionTitle() {
        cy.get(ELEMENTS.columnDescriptionTitle).contains(STRINGS.columnDescriptionTitle)
    }

    checkPaymentInformationTitle() {
        cy.get(ELEMENTS.informationTitle).contains(STRINGS.paymentInformation)
    }

    checkShippingInformationTitle() {
        cy.get(ELEMENTS.informationTitle).contains(STRINGS.shippingInformation)
    }

    checkSubtotalTitle() {
        cy.get(ELEMENTS.subtotalItem).contains(STRINGS.priceSubtotalTitle)
    }

    checkTaxTitle() {
        cy.get(ELEMENTS.taxItem).contains(STRINGS.priceTaxTitle)
    }

    checkTotalTitle() {
        cy.get(ELEMENTS.totalItem).contains(STRINGS.priceTotalTitle)
    }

    checkCancelButton() {
        cy.get(ELEMENTS.btnCancel).contains(STRINGS.btnCancel)
    }

    checkFinishButton() {
        cy.get(ELEMENTS.btnFinish).contains(STRINGS.btnFinish)
    }

    pressBtnFinish() {
        cy.get(ELEMENTS.btnFinish).click()
    }

    checkYourInformationPageItens() {
        this.checkPageTitle(STRINGS.pageYourInformationTitle)
        this.checkFirstNameField()
        this.checkLastNameField()
        this.checkPostalCodeField()
        this.checkCancelButton()
        this.checkBtnContinue()
    }

    checkOverviewPageItens() {
        this.checkPageTitle(STRINGS.pageOverViewTitle)
        this.checkColumnQtyTitle()
        this.checkColumnDescriptionTitle()
        this.checkPaymentInformationTitle()
        this.checkShippingInformationTitle()
        this.checkSubtotalTitle()
        this.checkTaxTitle()
        this.checkTotalTitle()
        this.checkCancelButton()
        this.checkFinishButton()
    }
}

export default new CheckoutPage()