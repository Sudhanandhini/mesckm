describe('Desktop Responsive Tests', () => {
  const desktopViewports = [
    { name: 'MacBook Air', width: 1280, height: 720 },
    { name: 'MacBook Pro', width: 1440, height: 900 },
    { name: 'Full HD', width: 1920, height: 1080 },
    { name: '4K', width: 2560, height: 1440 }
  ];

  const routes = ['/', '/about', '/donor', '/facilities', '/faculty', '/contact'];

  desktopViewports.forEach(viewport => {
    describe(`Desktop tests on ${viewport.name}`, () => {
      beforeEach(() => {
        cy.viewport(viewport.width, viewport.height);
      });

      routes.forEach(route => {
        it(`should display properly on ${viewport.name} at ${route}`, () => {
          cy.visit(route);
          cy.checkPageStructure();
        });

        it(`should show desktop menu on ${viewport.name} at ${route}`, () => {
          cy.visit(route);
          cy.get('nav.hidden.md\\:flex').should('be.visible');
        });

        it(`should hide mobile menu button on ${viewport.name} at ${route}`, () => {
          cy.visit(route);
          cy.get('button.md\\:hidden').should('not.be.visible');
        });

        it(`should show all dropdown menus on ${viewport.name} at ${route}`, () => {
          cy.visit(route);
          
          // Test each dropdown
          cy.contains('Facilities ▼').trigger('mouseover');
          cy.contains('Library').should('be.visible');
          
          cy.visit(route);
          cy.contains('Faculty ▼').trigger('mouseover');
          cy.contains('Teaching').should('be.visible');
          
          cy.visit(route);
          cy.contains('Forum ▼').trigger('mouseover');
          cy.contains('Arts').should('be.visible');
          
          cy.visit(route);
          cy.contains('Rank Holders ▼').trigger('mouseover');
          cy.contains('UG Rank Holders').should('be.visible');
        });
      });

      it(`should display logo at proper size on ${viewport.name}`, () => {
        cy.visit('/');
        cy.get('img[alt="Logo"]')
          .should('be.visible')
          .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
          });
      });

      it(`should display top bar links on ${viewport.name}`, () => {
        cy.visit('/');
        cy.contains('NSS').should('be.visible');
        cy.contains('Scholarship').should('be.visible');
        cy.contains('Yoga Wellness Centre').should('be.visible');
      });

      it(`should have proper navigation spacing on ${viewport.name}`, () => {
        cy.visit('/');
        cy.get('nav.hidden.md\\:flex').should('be.visible');
        cy.get('nav.hidden.md\\:flex a').should('have.length.greaterThan', 5);
      });
    });
  });
});