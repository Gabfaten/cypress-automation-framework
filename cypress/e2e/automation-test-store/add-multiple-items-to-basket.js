import AutoStore_Homepage_Po from '../../support/pageObjects/automation-test-store/AutoStore_Homepge_PO'
import AutoStore_HairCare_Po from '../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO'
/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
    const autoStore_Homepage_PO = new AutoStore_Homepage_Po();
    const autoStore_HairCare_Po = new AutoStore_HairCare_Po();

    before(function () {
        cy.fixture("products").then(function (data) {
            globalThis.data = data;
        });
    });

    beforeEach(function () {
        //cy.visit("https://automationteststore.com/");
        //cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.clearLocalStorage();
        cy.clearCookies();
        autoStore_Homepage_PO.accessHomepage();
        autoStore_Homepage_PO.clickOn_HairCare_Link();
    });

    it("Add specific items to basket", () => {
        //productName is the name of the json object
        /*globalThis.data.productName.forEach(function (element) {
            cy.addProductToBasket(element)
        })       
        cy.get('.dropdown-toggle > .fa').click();*/
        autoStore_HairCare_Po.addHairCareProductsToBasket();

    });
});