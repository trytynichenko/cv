describe('Home page test', () => {
  it('Open Home page', () => {
    cy.visit('/');
  });

  it('Displays navigation', () => {
    cy.get('.nav').should('be.visible');
  });

  it('Headline H1 exist', () => {
    cy.contains('h1', 'Hey there');
  });

  it('Headline H2 exist', () => {
    cy.contains('h2', 'Leonid Trytynichenko');
  });
});

describe('About page test', () => {
  it('Click About nav item', () => {
    cy.get('.nav').find('a').contains('About').click();
  });

  it('Headline H1 exist', () => {
    cy.contains('h1', 'Long story short');
  });

  it('Display Content', () => {
    cy.get('.content').should('be.visible');
  });
});

describe('Contact page test', () => {
  it('Click About nav item', () => {
    cy.get('.nav').find('a').contains('Contact').click();
  });

  it('Headline H1 exist', () => {
    cy.contains('h1', 'Contact');
  });

  it('Display Content', () => {
    cy.get('.content').should('be.visible');
  });
});
