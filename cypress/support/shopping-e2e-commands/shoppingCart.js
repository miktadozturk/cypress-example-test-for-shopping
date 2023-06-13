// -- Check shopping cart is empty --
Cypress.Commands.add("checkShoppingCartIsEmpty", () => {
    cy.get('.cart-empty > :nth-child(1)').contains('You have no items in your shopping cart')
});