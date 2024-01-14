
export const USERS = {
    standard_user : 'standard_user',
    locked_out_user : 'locked_out_user',
    problem_user : 'problem_user',
    performance_glitch_user : 'performance_glitch_user',
    password : 'secret_sauce'
}


export const STRINGS = {
    beVisible : 'be.visible',
    websitePath : 'https://www.saucedemo.com/v1/',
    productsPath : 'https://www.saucedemo.com/v1/inventory.html',
    aboutPath : 'https://saucelabs.com/',
    websiteTitle : 'Swag Labs',
}

class GlobalActions {

    checkLoadImages() {
        cy.get('img').each(($img) => {
        cy.wrap($img).scrollIntoView().should(STRINGS.beVisible);
        expect($img[0].naturalWidth).to.be.greaterThan(0);
        expect($img[0].naturalHeight).to.be.greaterThan(0);
        });
    }

    resolutionPage() {
        cy.viewport(2560, 1440)
    }

    checkPageTitle() {
        cy.title(STRINGS.websiteTitle)
    }

    acessPage() {
        cy.visit(STRINGS.websitePath)
        this.checkPageTitle()     
    }

    checkUrl(url) {
        cy.url('be.equal', url)
    }
}


export default new GlobalActions()