class Contact_Us_PO {
    contactForm_Submission(firstName, lastName, email, comment, $selector, textToLocate) {
        cy.get('[name="first_name"]').type(firstName);
        cy.get('[name="last_name"]').type(lastName);
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comment)
        cy.get('[type="submit"]').click();
        cy.get($selector).contains(textToLocate)
        //wait up to 60s
        //cy.get($selector).contains(textToLocate, {timeout: 60000})
        //cy.get($selector).pause().contains(textToLocate, {timeout: 60000})

        //if the last instruction fail ,the screenshot not work
        cy.screenshot();
        //specify the name of screenshot
        //cy.screenshot("Made a contact us form submission");
    }
}
export default Contact_Us_PO;