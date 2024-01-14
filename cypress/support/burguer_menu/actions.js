import { ELEMENTS } from "./elements"
import { STRINGS } from "./strings"
const globalStrings = require('../commons').STRINGS

class BurguerMenu {

    checkBurguerMenu() {
        cy.get(ELEMENTS.burguerMenu).should('be.visible')
    }

    menuItensList() {
        cy.get(ELEMENTS.menuItensList)
    }

    pressBurguerMenu() {
        cy.get(ELEMENTS.burguerMenu).click()

    }

    checkBtnAllItems() {
        cy.get(ELEMENTS.btnAllItens).contains(STRINGS.allItens).should('be.visible')
    }

    checkBtnAbout() {
        cy.get(ELEMENTS.btnAbout).contains(STRINGS.about).should('be.visible')
    }

    checkBtnLogout() {
        cy.get(ELEMENTS.btnLogout).contains(STRINGS.logout).should('be.visible')
    }

    checkBtnReset() {
        cy.get(ELEMENTS.btnReset).contains(STRINGS.reset).should('be.visible')
    }

    checkbtnClose() {
        cy.get(ELEMENTS.btnClose)
    }

    checkMenuItens() {
        this.checkBurguerMenu()
        this.pressBurguerMenu()
        this.checkBtnAllItems()
        this.checkBtnAbout()
        this.checkBtnLogout()
        this.checkBtnReset()
        this.checkbtnClose()
        this.pressbtnClose()
    }
  
    pressBtnAllItems() {
        cy.get(ELEMENTS.btnAllItens).click()
        cy.url(globalStrings.productsPath)
    }

    pressBtnAbout() {
        cy.get(ELEMENTS.btnAbout).click()
        cy.url(globalStrings.aboutPath)
    }

    pressBtnLogout() {
        cy.get(ELEMENTS.btnLogout).click()
        cy.url(globalStrings.websitePath)
    }

    pressBtnReset() {
        cy.get(ELEMENTS.btnReset).click()
    }

    pressbtnClose() {
        cy.get(ELEMENTS.btnClose).click()
        cy.get(ELEMENTS.menuItensList).should('not.be.visible')
    }

    
}


export default new BurguerMenu()