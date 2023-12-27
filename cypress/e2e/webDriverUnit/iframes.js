/// <reference types="cypress" />

describe("Handling IFrame & Modals", () => {
    it.skip("Handle webdriveruni iframe and modal", () => {
        //cy.visit("/")
        cy.navigateTo_WebdriverUni_Homepage();
        //invoke take a function as a parameter 
        //example:removeAttr() is a function in jquery
        cy.get('#iframe').invoke('removeAttr', '+').click({force:true})

        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')

            //cy.wrap take any type(object or string ) 
            cy.wrap(body).as('iframe')
        })

        cy.get('@iframe').find('#button-find-out-more').click()

        cy.get('@iframe').find('#myModal').as('modal')

        cy.get('@modal').should(($expectedText) => {
            const text = $expectedText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods');
        })

        cy.get('@modal').contains('Close').click()
    });
})