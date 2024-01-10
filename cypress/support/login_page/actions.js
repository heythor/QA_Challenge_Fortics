
//Here create actions in cypress language to import and avoid rewriting codes 



const elements = require('./elements').ELEMENTS
const strings = require('./strings').STRINGS
const globalStrings = require('../commons').STRINGS

const beVisible = 'be.visible'

class LoginPage {

    accessLoginPage() {
        cy.visit(strings.websitePath)
    }

    titleLoginPage() {
        cy.title(strings.websiteTitle)
    }

    checkUsernameField() {
        cy.get(elements.userNameField)
    }

    checkPasswordField() {
        cy.get(elements.passwordField)
    }

    checkBtnLogin(){
        cy.get(elements.btnLogin).contains(strings.btnLoginTxt).should(globalStrings.beVisible)
    }

    fillUsernameField(username) {
        cy.get(elements.userNameField).type(username)
    }

    fillPasswordField(password) {
        cy.get(elements.passwordField).type(password)
    }

    pressBtnLogin() {
        cy.get(elements.btnLogin).contains(strings.btnLoginTxt).click()
    }

    checkLoadImages() {
        cy.get('img').each(($img) => {
            cy.wrap($img).scrollIntoView().should(globalStrings.beVisible);
            expect($img[0].naturalWidth).to.be.greaterThan(0);
            expect($img[0].naturalHeight).to.be.greaterThan(0);
            });
    }

    doLogin(username, password) {
        this.fillUsernameField(username)
        this.fillPasswordField(password)
        this.pressBtnLogin()
    }

    userLockedError () {
        cy.get(elements.error).contains(strings.epicSadFace).contains(strings.userHasBeenLockedOut)
    }

    checkPasswordRequiredMessage() {
        cy.get(elements.error).contains(strings.epicSadFace).contains(strings.passwordRequired)
    }
    checkUsernameRequiredMessage() {
        cy.get(elements.error).contains(strings.epicSadFace).contains(strings.userNameRequired)
    }
}

export default new LoginPage()