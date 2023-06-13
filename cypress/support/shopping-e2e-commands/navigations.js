// -- Navigate to main page --
Cypress.Commands.add("visitMainPage", () =>{
    cy.visit('/');
});

// -- Navigate to shopping cart --
Cypress.Commands.add("navigateToShoppingCart", () => {
    cy.visit('/checkout/cart/')
    cy.get('.base').should('have.text', 'Shopping Cart')
    cy.url().should('contain', 'checkout/cart/')
});

Cypress.Commands.add("backToMainPageClickHereLink", () => {
    cy.get('.cart-empty > :nth-child(2) > a').should('have.text', 'here').click()
})