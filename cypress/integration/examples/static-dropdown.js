describe('Static Dropdown Test', () => {
    it('Static Dropdown Test Case', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      cy.get('select').select('option2').should('have.value', 'option2');
    })
  })