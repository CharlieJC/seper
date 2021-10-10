describe('Login page tests', () => {
    beforeEach('Successfully visit login page', () => {
        cy.visit('/login');
    });

      it('contains form element', () => {
        cy.get('form');
    });

      it('form has 3 input elements', () => {
        cy.get('form').find('input').its('length').should('equal',3)
    });
}) 

describe('Registration page tests', () => {
    beforeEach('Successfully visit register page', () => {
        cy.visit('/register');
    });

      it('contains form element', () => {
        cy.get('form');
    });

      it('form has 3 input elements', () => {
        cy.get('form').find('input').its('length').should('equal',3)
    });

      it('form has 1 select element', () => {
        cy.get('form').find('select').its('length').should('equal',1)
    });
}) 
