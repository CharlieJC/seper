describe('Practices', () => {
  describe('Practices api', () => {
    context('GET /practices', () => {
      it('should return a list with all practices', () => {
        cy.request({
          method: 'GET',
          url: '/api/practices',
        })
          .should((response) => {
            cy.log(JSON.stringify(response.body));
          });
      });
    });
  });
});
