describe('Articles', () => {
  describe('Articles api', () => {
    describe('GET /articles', () => {
      it('should return a list with all practices', () => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:8082/api/articles',
        }).should((response) => {
          expect(response.status).to.eq(200);
          cy.log(JSON.stringify(response.body));
        });
      });
    });
    describe('POST /articles', () => {
      it('should pass article details to the server', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:8082/api/articles',
          body: {
            Title: 'test',
            Authors: 'test',
            Source: 'test',
            PublicationYear: 'test',
            DOI: 'test',
            SEPractice: 'test',
          },
        }).then((response) => {
          expect(response.body).has.property('Title', 'test');
          expect(response.body).has.property('Authors', 'test');
          expect(response.body).has.property('Source', 'test');
          expect(response.body).has.property('PublicationYear', 'test');
          expect(response.body).has.property('DOI', 'test');
          expect(response.body).has.property('SEPractice', 'test');
        });
      });
    });
  });
});
