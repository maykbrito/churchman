/* eslint-disable no-undef */
describe('Creating Homepage', () => {
    it('Displays the navbar', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-element-name="navbar"]')
        
    });

    it('Display the footer', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-element-name="footer"]')
        
    });
});
  