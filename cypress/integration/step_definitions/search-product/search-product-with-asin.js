import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("I open the Amazon page", () => {
  cy.clearCookies();
  cy.visit("/");
});

When(/^I type the "([^"]*)"$/, (productSearch) => {
  cy.get(`#twotabsearchtextbox`).as(`searchBar`);
  cy.get(`@searchBar`).type(productSearch);
  // cy.wait(500);
});

When(/^I click the search button$/, () => {
  cy.get(`#nav-search-submit-button`).as(`searchButton`);
  cy.get(`@searchButton`).click();
});

Then(
  /^The product which name is "([^"]*)" should be listed$/,
  (productName) => {
    cy.get(`.a-size-mini`).as(`productLinkText`);
    cy.get(`@productLinkText`).should(`contain`, productName);
  }
);
