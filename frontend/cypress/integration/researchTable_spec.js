describe('Table', () => {
    beforeEach(() => {
        cy.visit('/SEpractice')
    });

    it('contains table element', () => {
        cy.get('table')
    });

    it('displays atleast 1 row of SE practices', () => {
    
        //cy.intercept('GET', 'http://localhost:8082/api/practices').as('getPractices')
        cy.wait(1000)
        cy.get('table').getTable().should(tableData => {
            expect(tableData).length.to.be.greaterThan(0)
        })
    
    })
})