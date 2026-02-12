describe('Image Loading Tests', () => {
  const routes = [
    '/',
    '/about',
    '/donor',
    '/course-regulations',
    '/facilities',
    '/library',
    '/laboratories',
    '/faculty',
    '/non-teaching',
    '/arts',
    '/commerce',
    '/science',
    '/nss',
    '/scholarship',
    '/rank-holders',
    '/yoga-wellness',
    '/contact'
  ];

  routes.forEach(route => {
    describe(`Image tests for ${route}`, () => {
      beforeEach(() => {
        cy.visit(route);
      });

      it(`should load logo image on ${route}`, () => {
        cy.get('img[alt="Logo"]')
          .should('be.visible')
          .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
            expect($img[0].complete).to.be.true;
          });
      });

      it(`should have alt text for logo on ${route}`, () => {
        cy.get('img[alt="Logo"]')
          .should('have.attr', 'alt')
          .and('not.be.empty');
      });

      it(`should check all images load properly on ${route}`, () => {
        cy.get('img').each(($img) => {
          // Check if image is visible
          cy.wrap($img).should('be.visible');
          
          // Check if image has loaded
          cy.wrap($img).should(($el) => {
            expect($el[0].naturalWidth).to.be.greaterThan(0);
          });
        });
      });

      it(`should have alt attributes for all images on ${route}`, () => {
        cy.get('img').each(($img) => {
          cy.wrap($img).should('have.attr', 'alt');
        });
      });

      it(`should not have broken images on ${route}`, () => {
        cy.get('img').each(($img) => {
          cy.wrap($img)
            .should('be.visible')
            .and(($el) => {
              const img = $el[0];
              expect(img.complete).to.be.true;
              expect(img.naturalWidth).to.be.greaterThan(0);
              expect(img.naturalHeight).to.be.greaterThan(0);
            });
        });
      });
    });
  });
});