describe('Complete Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Top Bar Navigation', () => {
    it('should display contact information', () => {
      cy.contains('hello@mesckm.edu.in').should('be.visible');
      cy.contains('+91-8262-236212').should('be.visible');
    });

    it('should have clickable email link', () => {
      cy.contains('hello@mesckm.edu.in')
        .parents('span')
        .should('be.visible');
    });

    it('should navigate to NSS page from top bar', () => {
      cy.contains('NSS').click();
      cy.url().should('include', '/nss');
    });

    it('should navigate to Scholarship page from top bar', () => {
      cy.visit('/');
      cy.contains('Scholarship').first().click();
      cy.url().should('include', '/scholarship');
    });

    it('should navigate to Yoga Wellness Centre from top bar', () => {
      cy.visit('/');
      cy.contains('Yoga Wellness Centre').first().click();
      cy.url().should('include', '/yoga-wellness');
    });

    it('should navigate to Contact page from top bar', () => {
      cy.visit('/');
      cy.contains('Contact us').first().click();
      cy.url().should('include', '/contact');
    });
  });

  describe('Main Navigation Menu', () => {
    it('should navigate to Home', () => {
      cy.contains('About us').click();
      cy.contains('Home').click();
      cy.url().should('match', /\/(mesckm)?$/);
    });

    it('should navigate to About us', () => {
      cy.contains('About us').click();
      cy.url().should('include', '/about');
    });

    it('should navigate to Donor', () => {
      cy.contains('Donor').click();
      cy.url().should('include', '/donor');
    });

    it('should navigate to Course Regulations', () => {
      cy.contains('Course Regulations').click();
      cy.url().should('include', '/course-regulations');
    });
  });

  describe('Facilities Dropdown Navigation', () => {
    it('should show Facilities dropdown on hover', () => {
      cy.contains('Facilities ▼').trigger('mouseover');
      cy.contains('Library').should('be.visible');
      cy.contains('Laboratories').should('be.visible');
    });

    it('should navigate to Facilities', () => {
      cy.contains('Facilities ▼').trigger('mouseover');
      cy.contains('a', 'Facilities').click();
      cy.url().should('include', '/facilities');
    });

    it('should navigate to Library', () => {
      cy.visit('/');
      cy.contains('Facilities ▼').trigger('mouseover');
      cy.contains('Library').click();
      cy.url().should('include', '/library');
    });

    it('should navigate to Laboratories', () => {
      cy.visit('/');
      cy.contains('Facilities ▼').trigger('mouseover');
      cy.contains('Laboratories').click();
      cy.url().should('include', '/laboratories');
    });
  });

  describe('Faculty Dropdown Navigation', () => {
    it('should show Faculty dropdown on hover', () => {
      cy.contains('Faculty ▼').trigger('mouseover');
      cy.contains('Teaching').should('be.visible');
      cy.contains('Non-Teaching').should('be.visible');
    });

    it('should navigate to Teaching Faculty', () => {
      cy.contains('Faculty ▼').trigger('mouseover');
      cy.contains('Teaching').click();
      cy.url().should('include', '/faculty');
    });

    it('should navigate to Non-Teaching Staff', () => {
      cy.visit('/');
      cy.contains('Faculty ▼').trigger('mouseover');
      cy.contains('Non-Teaching').click();
      cy.url().should('include', '/non-teaching');
    });
  });

  describe('Forum Dropdown Navigation', () => {
    it('should show Forum dropdown on hover', () => {
      cy.contains('Forum ▼').trigger('mouseover');
      cy.contains('Arts').should('be.visible');
      cy.contains('Commerce').should('be.visible');
      cy.contains('Science').should('be.visible');
    });

    it('should navigate to Arts', () => {
      cy.contains('Forum ▼').trigger('mouseover');
      cy.contains('Arts').click();
      cy.url().should('include', '/arts');
    });

    it('should navigate to Commerce', () => {
      cy.visit('/');
      cy.contains('Forum ▼').trigger('mouseover');
      cy.contains('Commerce').click();
      cy.url().should('include', '/commerce');
    });

    it('should navigate to Science', () => {
      cy.visit('/');
      cy.contains('Forum ▼').trigger('mouseover');
      cy.contains('Science').click();
      cy.url().should('include', '/science');
    });
  });

  describe('Rank Holders Dropdown Navigation', () => {
    it('should show Rank Holders dropdown on hover', () => {
      cy.contains('Rank Holders ▼').trigger('mouseover');
      cy.contains('UG Rank Holders').should('be.visible');
      cy.contains('PG Rank Holders').should('be.visible');
    });

    it('should navigate to Rank Holders main page', () => {
      cy.contains('Rank Holders ▼').trigger('mouseover');
      cy.contains('a', 'Rank Holders').first().click();
      cy.url().should('include', '/rank-holders');
    });

    it('should navigate to UG Rank Holders', () => {
      cy.visit('/');
      cy.contains('Rank Holders ▼').trigger('mouseover');
      cy.contains('UG Rank Holders').click();
      cy.url().should('include', '/rank-holders/ug');
    });

    it('should navigate to PG Rank Holders', () => {
      cy.visit('/');
      cy.contains('Rank Holders ▼').trigger('mouseover');
      cy.contains('PG Rank Holders').click();
      cy.url().should('include', '/rank-holders/pg');
    });
  });
});