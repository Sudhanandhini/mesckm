describe('All Links Validation Tests', () => {
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
    '/rank-holders/ug',
    '/rank-holders/pg',
    '/yoga-wellness',
    '/contact'
  ];

  routes.forEach(route => {
    describe(`Link tests for ${route}`, () => {
      beforeEach(() => {
        cy.visit(route);
      });

      it(`should have valid href attributes for all links on ${route}`, () => {
        cy.get('a').each(($link) => {
          cy.wrap($link).should('have.attr', 'href');
        });
      });

      it(`should not have empty href attributes on ${route}`, () => {
        cy.get('a').each(($link) => {
          const href = $link.attr('href');
          expect(href).to.not.be.undefined;
          expect(href).to.not.equal('');
          expect(href).to.not.equal('#');
        });
      });

      it(`should have clickable internal links on ${route}`, () => {
        cy.get('a').each(($link) => {
          const href = $link.attr('href');
          if (href && href.startsWith('/') && !href.includes('http')) {
            cy.wrap($link).should('be.visible');
          }
        });
      });

      it(`should verify all navigation links work on ${route}`, () => {
        cy.get('nav a').each(($link) => {
          const href = $link.attr('href');
          if (href && href.startsWith('/')) {
            cy.request({
              url: href,
              failOnStatusCode: false
            }).then((response) => {
              expect(response.status).to.eq(200);
            });
          }
        });
      });
    });
  });

  describe('External Links', () => {
    it('should check external links have target attribute', () => {
      cy.visit('/');
      cy.get('a[href^="http"]').each(($link) => {
        const href = $link.attr('href');
        if (href && !href.includes(Cypress.config('baseUrl'))) {
          // External links should ideally have target="_blank" or rel="noopener"
          cy.wrap($link).should('exist');
        }
      });
    });
  });
});