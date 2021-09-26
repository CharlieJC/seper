describe('Submit page tests', () => {
  describe('form tests', () => {
    beforeEach('Successfully visit submit page', () => {
      cy.visit('/submit');
    });

    it('contains form element', () => {
      cy.get('form');
    });

    it('form has 6 input elements', () => {
        cy.get('form').find('input').its('length').should('equal',6)
    });

    it('form has 5 text input elements', () => {
        cy.get('form').find('input[type="text"]').its('length').should('equal',5)
    });

    it('form has 1 submit input element', () => {
        cy.get('form').find('input[type="submit"]').its('length').should('equal',1)
    });

    it('form has 1 select element', () => {
        cy.get('form').find('select').its('length').should('equal',1)
    });

    it('can type in form test inputs', () => {
      cy.get('form')
        .find('input[type="text"]')
        .each((input) => {
          cy.wrap(input).type('test');
        });
    });
  });

  describe('bibtex submission tests', () => {});
});
