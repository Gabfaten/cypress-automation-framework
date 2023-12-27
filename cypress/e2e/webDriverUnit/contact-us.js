import Homepage_PO from '../../support/pageObjects/webDriver-uni/Homepage_PO'
import Contact_Us_PO from'../../support/pageObjects/webDriver-uni/Contact_us_PO'
/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    //override defaultCommandTimeout in the setting(cypress.config) to the entire test suite (by default 10000)
    //Cypress.config('defaultCommandTimeout', 20000) //20seconds

    const homepage_PO = new Homepage_PO();
    const contact_us_PO = new Contact_Us_PO();
   
    //hooks:before & beforeEach
    before(function() {
        //read data from json file
        cy.fixture('example').then(function(data) {
            //this.data = data;   don't work        
            globalThis.data = data;
        })
    })
    beforeEach(function () {
        // cy.visit("/")
        // cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        //use environment variable
        //cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html")
        // or use BaseUrl
       // cy.visit("/" + "Contact-Us/contactus.html")

       homepage_PO.visitHomepage();  
       cy.wait(3000); //3sec
       homepage_PO.clickOn_ContactUs_Button();  
       //in order to debug or inspect element 
       //cy.pause();  

    })
    it("Should be able to submit a successful submission via contact us form",() => {   
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        //cy.get('#contact-us').click({force: true})
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        //cy.get('[name="email"]').type(data.email)
        // cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        // cy.get('[type="submit"]').click();
        // cy.get('h1').should('have.text', 'Thank You for your Message!')

        //use command add  & environment variable
        /*cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"),
         data.last_name, data.email,
         "How can I learn Cypress?",
        'h1', 'Thank You for your Message!');*/    

        contact_us_PO.contactForm_Submission(Cypress.env("first_name"),data.last_name,data.email,"How can I learn Cypress?",'h1', 'Thank You for your Message!'); 
       
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {        
        if(Cypress.isBrowser('firefox')) {

        } else {  
          contact_us_PO.contactForm_Submission(Cypress.env("first_name"),data.last_name, " ","How can I learn Cypress?",'body', 'Error: Invalid email address'); 
        }
    });
})