describe('Test the browserstack documentation website', () => {
    beforeEach(() => {
        cy.visit('https://www.browserstack.com/docs/')
    });
    it('The first product card should link to selenium docs', () => {
        cy.get('.product-detail-card').should('have.length', 18);
        cy.get('.product-detail-card').first().click();
        cy.url().should('include', 'https://www.browserstack.com/docs/automate/selenium')

    });

    // it('The first product card should link to selenium docs', () => {
    //     cy.get('.product-detail-card').should('have.length', 18);
    //     cy.get('.product-detail-card').first().click();
    //     cy.url().should('include', 'https://www.browserstack.com/docs/automate/selenium')
    //
    // });

    it('search bar should show cypress results', () => {
        cy.get('#docs-search-bar-input')
            .type('cypress{enter}');
        cy.url().should('include', 'search?query=cypress&type=documentation&referrer=documentation')

        cy.get('input[value="support"]').click()

    })

});