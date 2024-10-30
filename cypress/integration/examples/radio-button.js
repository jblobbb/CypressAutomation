/// <reference types="Cypress" />

describe('Radio Buttons Test', () => {
    it('Radio Buttons Test Case', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      cy.get('[value="radio2"]').check().should('be.checked');
    })
  })