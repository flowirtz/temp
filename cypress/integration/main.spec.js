// main.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

const TEST_AIRPORT_QUERY = "London";

describe("Airports Search Typeahead", () => {
  it("renders without crashing", () => {
    cy.visit("localhost:3000");

    cy.get("h1").should("contain", "Code Challenge: Airports");
  });

  it("shows suggestions when typing", () => {
    cy.visit("localhost:3000");

    cy.get("input").click().type(TEST_AIRPORT_QUERY);
    cy.get("li").should("have.length", 10);
  });

  it("redirects when clicking a suggestion", () => {
    cy.visit("localhost:3000");

    cy.get("input").click().type(TEST_AIRPORT_QUERY);
    cy.get("li#airports-search-item-4").click();

    cy.url().should("include", "/airports/ltn");
    cy.get("h1").should("contain", "Airport: London Luton Airport");
  });
});
