/// <reference types = "cypress"/>


import LoginPage from '../support/login_page/actions'
const loginData = require('../fixtures/login_data.json')
const user = require('../support/commons.js').USERS
import ProductPage from '../support/product_page/actions.js'
import GlobalActions from '../support/commons.js'
const strings = require('../support/commons.js').STRINGS


describe('Check Elements Page', () => {

    beforeEach (() => {
        GlobalActions.resolutionPage()
        GlobalActions.acessPage()
        GlobalActions.checkLoadImages()
    })

    it('Check Username and Password Field', () => {
        LoginPage.checkUsernameField()
        LoginPage.checkPasswordField()
    })

    it('Check Button Login', () => {
        LoginPage.checkBtnLogin()
    })

}) 

describe ('Do login', () => {

    beforeEach (() => {
        GlobalActions.resolutionPage()
        GlobalActions.acessPage()
        GlobalActions.checkLoadImages()
    })

    it('Login with multiple users', () => {
        cy.get(loginData).each((param) => {
            LoginPage.doLogin(param.user, param.pwd)
        })
    })

    it('Login with success', () => {
        LoginPage.doLogin(user.standard_user, user.password)
        GlobalActions.checkUrl(strings.productsPath)
        GlobalActions.checkLoadImages()
    })

    it('Login with problem user', () => {
        LoginPage.doLogin(user.problem_user, user.password)
        GlobalActions.checkUrl(strings.productsPath)
        GlobalActions.checkLoadImages()
    })

    it('Login with performance glitch', () => {
        LoginPage.doLogin(user.performance_glitch_user, user.password)
        GlobalActions.checkUrl(strings.productsPath)
        GlobalActions.checkLoadImages()
    })

})


describe('Alerts test', () => {

    beforeEach (() => {
        GlobalActions.resolutionPage()
        GlobalActions.acessPage()
        GlobalActions.checkLoadImages()
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
})