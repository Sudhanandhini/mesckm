describe('All Routes and Pages Tests', () => {
  const routes = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/donor', name: 'Donor' },
    { path: '/course-regulations', name: 'Course Regulations' },
    { path: '/facilities', name: 'Facilities' },
    { path: '/library', name: 'Library' },
    { path: '/laboratories', name: 'Laboratories' },
    { path: '/faculty', name: 'Faculty' },
    { path: '/non-teaching', name: 'Non-Teaching' },
    { path: '/arts', name: 'Arts' },
    { path: '/commerce', name: 'Commerce' },
    { path: '/science', name: 'Science' },
    { path: '/nss', name: 'NSS' },
    { path: '/scholarship', name: 'Scholarship' },
    { path: '/rank-holders', name: 'Rank Holders' },
    { path: '/rank-holders/ug', name: 'UG Rank Holders' },
    { path: '/rank-holders/pg', name: 'PG Rank Holders' },
    { path: '/yoga-wellness', name: 'Yoga Wellness' },
    { path: '/contact', name: 'Contact' }
  ];

  routes.forEach(route => {
    describe(`Testing ${route.name} page`, () => {
      beforeEach(() => {
        cy.visit(route.path);
      });

      it(`should load ${route.name} page successfully`, () => {
        cy.url().should('include', route.path);
        cy.checkPageStructure();
      });

      it(`should not have any console errors on ${route.name}`, () => {
        cy.window().then((win) => {
          cy.spy(win.console, 'error').as('consoleError');
        });
        cy.get('@consoleError').should('not.be.called');
      });

      it(`should have correct page title or heading on ${route.name}`, () => {
        cy.get('main').should('exist').and('be.visible');
      });

      it(`should render content on ${route.name}`, () => {
        cy.get('main').children().should('have.length.greaterThan', 0);
      });
    });
  });
});