describe('Test the browserstack documentation website', () => {
    beforeEach(() => {
        cy.visit('https://www.browserstack.com/docs/')
    });
    it('should contain 18 product detail cards', () => {
        cy.get('.product-detail-card').should('have.length', 18);

    });

    it('should contain a link to the cypress pages as a product card', () => {
        cy.get('.product-detail-card')
            .contains('Cypress')
            .parent()
            .click();
        cy.url().should('include', 'https://www.browserstack.com/docs/automate/cypress')
    });


    it('should focus the search bar when the user types "/"', () => {
        cy.get('body')
            .type('/');
        cy.focused()
            .should('have.id', 'docs-search-bar-input');

    });
});

describe('Test the search results pages', () => {
    it('search bar should show cypress results with documentation type selected', () => {
        cy.visit('https://www.browserstack.com/docs/');
        cy.get('#docs-search-bar-input')
            .type('cypress{enter}');
        cy.url().should('include', 'search?query=cypress&type=documentation');
        cy.get('input[value="documentation"]')
            .parent().parent()
            .should('have.class', 'active')
    });

    it('updates the active tab when a results tab is clicked', () => {
        cy.visit('https://www.browserstack.com/search?query=cypress&type=documentation')
        cy.get('input[value="support"]')
            .parent().click();
        cy.url().should('include', 'type=support')
        cy.get('input[value="support"]')
            .parent().parent()
            .should('have.class', 'active')
    });
});
