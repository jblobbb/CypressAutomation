describe('Dynamic Dropdown Test', () => {
    it('Dynamic Dropdown Test Case', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      cy.get('#autocomplete').type('ind')
      cy.get('.ui-menu-item div').each(($el, index, $list) => {
        if($el.text() === 'India'){
            $el.click();
        }
      })
      cy.get('#autocomplete').should('have.value','India');
    })
  })