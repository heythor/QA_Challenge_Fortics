/// <reference types = "cypress"/>


import LoginPage from '../support/login_page/actions'
const loginData = require('../fixtures/login_data.json')
const user = require('../support/commons.js').USERS
import ProductPage from '../support/product_page/actions.js'

describe ('Login page test', () => {
    // here you create you tests case in one group to run

    beforeEach (() => {

        cy.viewport(2560, 1440)
        LoginPage.accessLoginPage()

    })

    // it('Login with multiple users', () => {

    //     use when testing multiple users (configured in fixtures/login_data.json)

    //     cy.get(loginData).each((param) => {
    //         LoginPage.doLogin(param.user, param.pwd)
    //     })
    // })

    it('Check if the page is online', () => {
        LoginPage.titleLoginPage()
        LoginPage.checkLoadImages()
    })

    it('Check Username and Password Field', () => {
        LoginPage.checkUsernameField()
        LoginPage.checkPasswordField()
    })

    it('Check Button Login', () => {
        LoginPage.checkBtnLogin()
    })

    it('Login with success', () => {
        LoginPage.doLogin(user.standard_user, user.password)
    })

    it('Try login with locked user', () => {
        LoginPage.doLogin(user.locked_out_user, user.password)
        LoginPage.userLockedError()
    })

    it('Try login without fill username', () => {
        LoginPage.fillPasswordField(user.password)
        LoginPage.pressBtnLogin()
        LoginPage.checkUsernameRequiredMessage()
    })

    it('Try login without fill password', () => {
        LoginPage.fillUsernameField(user.standard_user)
        LoginPage.pressBtnLogin()
        LoginPage.checkPasswordRequiredMessage()
    })

    it.only('procuctTest', () => {
        LoginPage.doLogin(user.standard_user, user.password)
        ProductPage.teste()
    })


    
})