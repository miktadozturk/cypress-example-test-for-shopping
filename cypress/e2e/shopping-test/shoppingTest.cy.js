/// <reference types="cypress" />

describe('End-to-end shopping cart tests', () => {
  
    it('should allow a user to add items to the shopping cart', () => {
    cy.on('uncaught:exception', (err, runnable) => { return false })

      // -- Visit main page --
      cy.visitMainPage();
  
      // -- Check shopping cart is empty first --
      cy.navigateToShoppingCart();
      cy.checkShoppingCartIsEmpty();
  
      //search Gwyn Endurance Tee Medium Green 
      cy.backToMainPageClickHereLink();
    });
  });
  