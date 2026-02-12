describe('Mobile Responsive Tests', () => {
  const mobileViewports = [
    { name: 'iPhone SE', width: 375, height: 667 },
    { name: 'iPhone XR', width: 414, height: 896 },
    { name: 'iPhone 12 Pro', width: 390, height: 844 },
    { name: 'Pixel 5', width: 393, height: 851 },
    { name: 'Samsung Galaxy S8+', width: 360, height: 740 }
  ];

  const routes = ['/', '/about', '/contact', '/facilities', '/faculty'];

  mobileViewports.forEach(viewport => {
    describe(`Mobile tests on ${viewport.name}`, () => {
      beforeEach(() => {
        cy.viewport(viewport.width, viewport.height);
      });

      routes.forEach(route => {
        it(`should display properly on ${viewport.name} at ${route}`, () => {
          cy.visit(route);
          cy.checkPageStructure();
        });

        it(`should show mobile menu button on ${viewport.name} at ${route}`, () => {
          cy.visit(route);
          cy.get('button').contains('svg').should('be.visible');
        });

        it(`should hide desktop menu on ${viewport.name} at ${route}`, () => {
          cy.visit(route);
          cy.get('nav.hidden.md\\:flex').should('not.be.visible');
        });

        it(`should open mobile menu on ${viewport.name} at ${route}`, () => {
          cy.visit(route);
          cy.get('button').contains('svg').click();
          cy.contains('Home').should('be.visible');
          cy.contains('About us').should('be.visible');
        });
      });

      it(`should toggle mobile dropdowns on ${viewport.name}`, () => {
        cy.visit('/');
        cy.openMobileMenu();

        // Test Facilities dropdown
        cy.contains('button', 'Facilities').click();
        cy.contains('Library').should('be.visible');
        cy.contains('Laboratories').should('be.visible');

        // Test Faculty dropdown
        cy.contains('button', 'Faculty').click();
        cy.contains('Teaching').should('be.visible');

        // Test Forum dropdown
        cy.contains('button', 'Forum').click();
        cy.contains('Arts').should('be.visible');
        cy.contains('Commerce').should('be.visible');

        // Test Rank Holders dropdown
        cy.contains('button', 'Rank Holders').click();
        cy.contains('UG Rank Holders').should('be.visible');
      });

      it(`should navigate from mobile menu on ${viewport.name}`, () => {
        cy.visit('/');
        cy.openMobileMenu();
        cy.contains('About us').click();
        cy.url().should('include', '/about');
      });

      it(`should close mobile menu after link click on ${viewport.name}`, () => {
        cy.visit('/');
        cy.openMobileMenu();
        cy.contains('Contact us').last().click();
        cy.url().should('include', '/contact');
      });

      it(`should display logo properly on ${viewport.name}`, () => {
        cy.visit('/');
        cy.get('img[alt="Logo"]')
          .should('be.visible')
          .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
          });
      });

      it(`should display contact info on ${viewport.name}`, () => {
        cy.visit('/');
        cy.contains('hello@mesckm.edu.in').should('exist');
        cy.contains('+91-8262-236212').should('exist');
      });
    });
  });
});