/// <reference types="cypress" />

describe('Test File Upload via webdriveruni', () => {
    beforeEach(function () {      
       // cy.visit("/")
       cy.navigateTo_WebdriverUni_Homepage();
       cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});
    })
    it('Upload a file....', () => {     

        cy.get("#myFile").selectFile("cypress/fixtures/file.txt");
        cy.get("#submit-button").click();    
        //js alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Your file has now been uploaded!')
        })
    });

    it('Upload No file...', () => {       
        cy.get("#submit-button").click();
       
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You need to select a file to upload!')
        })
    });
});