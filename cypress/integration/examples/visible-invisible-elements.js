/// <reference types="Cypress" />

describe('Visible and invisible elements Test', () => {
    it('Visible and invisible elements Test Case', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      cy.get('#displayed-text').should('be.visible');
      cy.get('#hide-textbox').click();
      cy.get('#displayed-text').should('not.be.visible');
    })
  })