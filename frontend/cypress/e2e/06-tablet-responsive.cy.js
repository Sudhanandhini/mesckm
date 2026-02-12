describe('Tablet Responsive Tests', () => {
  const tabletViewports = [
    { name: 'iPad Mini', width: 768, height: 1024 },
    { name: 'iPad Air', width: 820, height: 1180 },
    { name: 'iPad Pro', width: 1024, height: 1366 },
    { name: 'Surface Pro 7', width: 912, height: 1368 }
  ];

  const routes = ['/', '/about', '/facilities', '/contact'];

  tabletViewports.forEach(viewport => {
    describe(`Tablet tests on ${viewport.name}`, () => {
      beforeEach(() => {
        cy.viewport(viewport.width, viewport.height);
      });

      routes.forEach(route => {
        it(`should display properly on ${viewport.name} at ${route}`, () => {
          cy.visit(route);
          cy.checkPageStructure();
        });

        it(`should show appropriate menu on ${viewport.name} at ${route}`, () => {
          cy.visit(route);
          // Check if desktop menu is visible at md breakpoint (768px)
          if (viewport.width >= 768) {
            cy.get('nav.hidden.md\\:flex').should('be.visible');
          }
        });

        it(`should handle dropdowns on ${viewport.name} at ${route}`, () => {
          cy.visit(route);
          if (viewport.width >= 768) {
            cy.contains('Facilities ▼').trigger('mouseover');
            cy.contains('Library').should('be.visible');
          }
        });
      });

      it(`should display images correctly on ${viewport.name}`, () => {
        cy.visit('/');
        cy.get('img[alt="Logo"]').should('be.visible');
      });

      it(`should have proper spacing on ${viewport.name}`, () => {
        cy.visit('/');
        cy.get('header').should('be.visible');
        cy.get('main').should('be.visible');
        cy.get('footer').should('be.visible');
      });
    });
  });
});