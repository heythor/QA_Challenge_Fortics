/// <reference types = "cypress"/>

import LoginPage from '../support/login_page/actions'
import GlobalActions, { USERS } from '../support/commons'
import ProductPage from '../support/product_page/actions.js'
import BurguerMenu from '../support/burguer_menu/actions.js'
const strings = require('../support/product_page/strings.js').STRINGS
const user = require('../support/commons.js').USERS
const ProductDataAZ = require('../fixtures/productAZ_data.json')
const ProductDataZA = require('../fixtures/productZA_data.json')
const ProductDataLH = require('../fixtures/productLH_data.json')
const ProductDataHL = require('../fixtures/productHL_data.json')
const ProductItemPage = require('../fixtures/productItem_data.json')
import CartPage from '../support/cart_page/actions.js'
import CheckoutPage from '../support/checkout_page/actions.js'
import FinishPage from '../support/finish_page/actions.js' 
import { faker } from '@faker-js/faker';



describe('Check Products Page Elements', () => {
    beforeEach(() => {
        GlobalActions.resolutionPage()
        GlobalActions.acessPage()
        LoginPage.doLogin(USERS.standard_user, USERS.password)
    })

    it('Check Burguer Menu', () => {
        BurguerMenu.checkMenuItens()
    })

    it('Check Cart', () => {
        ProductPage.checkCart()
    })

    it('Check Product List Title', () => {
        ProductPage.checkProductListTitle()
    })
    it('Check Filters', () => {
        ProductPage.checkFilter()
    })

    it('Check Products List', () => {
        ProductPage.checkInventoryContainer()
    })


})


describe('Check Products Filter', () => {

    beforeEach(() => {
        GlobalActions.resolutionPage()
        GlobalActions.acessPage()
        LoginPage.doLogin(USERS.standard_user, USERS.password)
    })

    
    it('Check Products Filter A to Z', () => {

        GlobalActions.checkLoadImages()
        cy.get(ProductDataAZ).each((param) => {
            ProductPage.checkProdutcTitle(param.childNumber, param.productName)
            ProductPage.checkProdutcDescription(param.childNumber, param.productDescription)
            ProductPage.checkProductPrice(param.childNumber, param.productPrice)
        })
    })



    it('Check Product Filter Z to A', () => {
        ProductPage.selectFilter(strings.filterNameZA)
        GlobalActions.checkLoadImages()
        cy.get(ProductDataZA).each((param) => {
            ProductPage.checkProdutcTitle(param.childNumber, param.productName)
            ProductPage.checkProdutcDescription(param.childNumber, param.productDescription)
            ProductPage.checkProductPrice(param.childNumber, param.productPrice)
        })
    })

    it('Check Product Filter Low to High price', () => {
        ProductPage.selectFilter(strings.filterLH)
        GlobalActions.checkLoadImages()
        cy.get(ProductDataLH).each((param) => {
            ProductPage.checkProdutcTitle(param.childNumber, param.productName)
            ProductPage.checkProdutcDescription(param.childNumber, param.productDescription)
            ProductPage.checkProductPrice(param.childNumber, param.productPrice)
        })
    })

    it('Check Product Filter High to Low price', () => {
        ProductPage.selectFilter(strings.filterHL)
        GlobalActions.checkLoadImages()
        cy.get(ProductDataHL).each((param) => {
            ProductPage.checkProdutcTitle(param.childNumber, param.productName)
            ProductPage.checkProdutcDescription(param.childNumber, param.productDescription)
            ProductPage.checkProductPrice(param.childNumber, param.productPrice)
        })
    }) 
})


describe('Product individual Page', () => {

    beforeEach(()=> {
        GlobalActions.resolutionPage()
        GlobalActions.acessPage()
        LoginPage.doLogin(USERS.standard_user, USERS.password)
    })

    it('Check Item page', () => {
        cy.get(ProductItemPage).each((param) => {
            ProductPage.selectItem(param.childNumber, param.productName)
            GlobalActions.checkLoadImages()
            ProductPage.CheckTitleItemPage(param.productName)
            ProductPage.CheckDescriptionItemPage(param.productDescription)
            ProductPage.CheckPriceItemPage(param.productPrice)
            ProductPage.PressBtnBackItemPage()
        })

        
    })

    it('Check Buttons ADD and REMOVE funcionality', () => {
        var value = 0
        cy.get(ProductItemPage).each((param) => {
            ProductPage.selectItem(param.childNumber, param.productName)
            GlobalActions.checkLoadImages()
             ProductPage.pressBtnAddToCartItemPage()
            value +=1
            ProductPage.checkCartItens(value)
            ProductPage.PressBtnBackItemPage()
        })

        cy.get(ProductItemPage).each((param) => {
            ProductPage.selectItem(param.childNumber, param.productName)
            GlobalActions.checkLoadImages()
            ProductPage.pressBtnRemoveItemPage()
            value -=1
            ProductPage.checkCartItens(value)
            ProductPage.PressBtnBackItemPage()
        })

    })

    describe('Complete transaction', () => {
        beforeEach(()=> {
            GlobalActions.resolutionPage()
            GlobalActions.acessPage()
            LoginPage.doLogin(USERS.standard_user, USERS.password)
        })

        it('Buy one by one products', () => {
            cy.get(ProductItemPage).each((param) => {
                ProductPage.selectItem(param.childNumber, param.productName)
                GlobalActions.checkLoadImages()
                ProductPage.pressBtnAddToCartItemPage()
                ProductPage.pressCart()
                CartPage.checkProductName(param.productName)
                CartPage.checkProductDescription(param.productDescription)
                CartPage.checkProductPrice(param.productPrice)
                CartPage.pressbtnCheckout()
                CheckoutPage.checkYourInformationPageItens()
                CheckoutPage.typeFirstName(faker.person.firstName())
                CheckoutPage.typeLastName(faker.person.lastName())
                CheckoutPage.typePostalCode(faker.location.zipCode())
                CheckoutPage.pressBtnContinue()
                CheckoutPage.checkOverviewPageItens()
                CheckoutPage.pressBtnFinish()
                FinishPage.checkFinishPageMessages()
                BurguerMenu.pressBurguerMenu()
                BurguerMenu.pressBtnAllItems()
            })
        })

        it('Buy all itens', () => {
            cy.get(ProductDataAZ).each((param) => {
                ProductPage.checkProdutcTitle(param.childNumber, param.productName)
                ProductPage.checkProdutcDescription(param.childNumber, param.productDescription)
                ProductPage.checkProductPrice(param.childNumber, param.productPrice)
                ProductPage.pressBtnAddToCart(param.childNumber)
            })
            ProductPage.checkCartItens(6)
            ProductPage.pressCart()
            cy.get(ProductItemPage).each((param) => {
            CartPage.checkProductName(param.productName)
            CartPage.checkProductDescription(param.productDescription)
            CartPage.checkProductPrice(param.productPrice)
            })
            CartPage.pressbtnCheckout()
            CheckoutPage.checkYourInformationPageItens()
            CheckoutPage.typeFirstName(faker.person.firstName())
            CheckoutPage.typeLastName(faker.person.lastName())
            CheckoutPage.typePostalCode(faker.location.zipCode())
            CheckoutPage.pressBtnContinue()
            CheckoutPage.checkOverviewPageItens()
            CheckoutPage.pressBtnFinish()
            FinishPage.checkFinishPageMessages()

        })
    })
})

