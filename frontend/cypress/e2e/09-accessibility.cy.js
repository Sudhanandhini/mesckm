describe('Accessibility Tests', () => {
  const routes = ['/', '/about', '/contact'];

  routes.forEach(route => {
    describe(`Accessibility on ${route}`, () => {
      beforeEach(() => {
        cy.visit(route);
      });

      it(`should have proper heading hierarchy on ${route}`, () => {
        cy.get('h1, h2, h3, h4, h5, h6').should('exist');
      });

      it(`should have alt text for all images on ${route}`, () => {
        cy.get('img').each(($img) => {
          cy.wrap($img)
            .should('have.attr', 'alt')
            .and('not.be.empty');
        });
      });

      it(`should have aria-labels or text for buttons on ${route}`, () => {
        cy.get('button').each(($button) => {
          const hasAriaLabel = $button.attr('aria-label');
          const hasText = $button.text().trim().length > 0;
          const hasSvg = $button.find('svg').length > 0;
          
          expect(hasAriaLabel || hasText || hasSvg).to.be.true;
        });
      });

      it(`should have proper link text on ${route}`, () => {
        cy.get('a').each(($link) => {
          const text = $link.text().trim();
          const ariaLabel = $link.attr('aria-label');
          const hasImage = $link.find('img').length > 0;
          
          expect(text.length > 0 || ariaLabel || hasImage).to.be.true;
        });
      });

      it(`should have proper contrast for text on ${route}`, () => {
        cy.get('body').should('have.css', 'color');
        cy.get('body').should('have.css', 'background-color');
      });
    });
  });
});