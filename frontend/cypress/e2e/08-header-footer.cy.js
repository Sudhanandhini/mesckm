describe('Header and Footer Tests', () => {
  const routes = ['/', '/about', '/contact', '/facilities'];

  describe('Header Tests', () => {
    routes.forEach(route => {
      it(`should display header correctly on ${route}`, () => {
        cy.visit(route);
        cy.get('header').should('be.visible');
      });

      it(`should have logo in header on ${route}`, () => {
        cy.visit(route);
        cy.get('header img[alt="Logo"]').should('be.visible');
      });

      it(`should have contact information in header on ${route}`, () => {
        cy.visit(route);
        cy.get('header').within(() => {
          cy.contains('hello@mesckm.edu.in').should('exist');
          cy.contains('+91-8262-236212').should('exist');
        });
      });

      it(`should have navigation menu in header on ${route}`, () => {
        cy.visit(route);
        cy.get('header nav').should('exist');
      });
    });

    it('should keep header fixed/sticky on scroll', () => {
      cy.visit('/');
      cy.get('header').should('be.visible');
      cy.scrollTo('bottom');
      cy.get('header').should('be.visible');
    });
  });

  describe('Footer Tests', () => {
    routes.forEach(route => {
      it(`should display footer correctly on ${route}`, () => {
        cy.visit(route);
        cy.get('footer').should('be.visible');
      });

      it(`should have footer content on ${route}`, () => {
        cy.visit(route);
        cy.get('footer').children().should('have.length.greaterThan', 0);
      });
    });

    it('should keep footer at bottom of page', () => {
      cy.visit('/');
      cy.get('footer').should('be.visible');
      cy.scrollTo('bottom');
      cy.get('footer').should('be.visible');
    });
  });
});