/// <reference types="cypress" />

describe("Verify radio buttons via webdriveruni", () => {
    it("Check specific radio buttons", () => {
       // cy.visit("/")
        cy.navigateTo_WebdriverUni_Homepage();
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('#radio-buttons').find("[type='radio']").first().check()
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
    });
})