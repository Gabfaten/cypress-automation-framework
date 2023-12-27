/// <reference types="cypress" />

describe("Cypress web security", () => {
    //skip -> disable the test case
    it.skip("Validate visiting two different domains", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        //fail because The new URL is considered a different origin
        cy.visit('https://automationteststore.com/');
    });
     //solution
    it("Validate visiting two different domains via user actions", () => {
        cy.visit('http://www.webdriveruniversity.com/'); 
        //navigate to https://automationteststore.com/  
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });

    it('Origin command', () => {
        cy.origin('webdriveruniversity.com', () => {
            cy.visit("/");
        })

        cy.origin('automationteststore.com', () => {
            cy.visit("/");
        })

        //Same Origin Example: 
        //cy.visit("https://www.webdriveruniversity.com");
       // cy.visit("https://selectors.webdriveruniversity.com");
    });
})