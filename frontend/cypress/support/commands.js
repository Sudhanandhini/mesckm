// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom command to check all links on a page
Cypress.Commands.add('checkAllLinks', () => {
  cy.get('a').each(($link) => {
    const href = $link.attr('href');
    if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
      cy.wrap($link).should('have.attr', 'href').and('not.be.empty');
    }
  });
});

// Custom command to check all images load
Cypress.Commands.add('checkAllImages', () => {
  cy.get('img').each(($img) => {
    cy.wrap($img)
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});

// Custom command to test responsive design
Cypress.Commands.add('testResponsive', (callback) => {
  const viewports = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1280, height: 720 },
    { name: 'large-desktop', width: 1920, height: 1080 }
  ];

  viewports.forEach(viewport => {
    cy.viewport(viewport.width, viewport.height);
    if (callback) callback(viewport);
  });
});

// Custom command to open mobile menu
Cypress.Commands.add('openMobileMenu', () => {
  cy.get('button').contains('svg').click();
});

// Custom command to test dropdown
Cypress.Commands.add('testDropdownHover', (dropdownName, items) => {
  cy.contains(`${dropdownName} ▼`).trigger('mouseover');
  items.forEach(item => {
    cy.contains(item).should('be.visible');
  });
});

// Custom command to check page structure
Cypress.Commands.add('checkPageStructure', () => {
  cy.get('header').should('be.visible');
  cy.get('main').should('be.visible');
  cy.get('footer').should('be.visible');
});

// Custom command to check no console errors
Cypress.Commands.add('checkConsoleErrors', () => {
  cy.window().then((win) => {
    cy.spy(win.console, 'error').as('consoleError');
  });
});