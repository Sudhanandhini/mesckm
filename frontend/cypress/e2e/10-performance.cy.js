describe('Performance Tests', () => {
  const routes = ['/', '/about', '/facilities', '/contact'];

  routes.forEach(route => {
    it(`should load ${route} page within acceptable time`, () => {
      const start = Date.now();
      cy.visit(route);
      cy.window().then(() => {
        const loadTime = Date.now() - start;
        expect(loadTime).to.be.lessThan(5000); // Should load in less than 5 seconds
      });
    });

    it(`should have acceptable number of images on ${route}`, () => {
      cy.visit(route);
      cy.get('img').then(($images) => {
        expect($images.length).to.be.lessThan(50); // Reasonable limit
      });
    });

    it(`should load all images efficiently on ${route}`, () => {
      cy.visit(route);
      cy.get('img').each(($img) => {
        cy.wrap($img).should('be.visible').and(($el) => {
          expect($el[0].complete).to.be.true;
        });
      });
    });
  });
});