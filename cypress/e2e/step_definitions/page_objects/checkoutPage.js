const BASE_URL = 'https://www.demoblaze.com/';

export default {
    addToCart() {
        cy.contains('Samsung galaxy s6').first().click();
        cy.contains('Add to cart').click();
        cy.wait(1000)

        cy.visit(BASE_URL);

        cy.contains('Nexus 6').first().click();
        cy.contains('Add to cart').click();
        cy.wait(1000)
    },

    confirmCart() {
        cy.contains('Samsung galaxy s6').should('exist');
        cy.contains('Nexus 6').should('exist');
        cy.wait(1000)

        cy.get('#totalp').then(($element) => {
            const text = $element.text();
            cy.log(`Total Value: ${text}`);
            expect(text).to.equal('1010');
        });

        cy.contains('Place Order').click();

    },

    fillPaymentDetails() {
        cy.get('#name').click().clear().type('Bilck')
        cy.get('#country').click().clear().type('Brasil')
        cy.get('#city').click().clear().type('Florianópolis')
        cy.get('#card').click().clear().type('5555 5555 5555 5557')
        cy.get('#month').click().clear().type('11')
        cy.get('#year').click().clear().type('2024')
    },

    completePurchase() {
        cy.wait(1000)
        cy.contains('Purchase').click();

        cy.contains('Thank you for your purchase!')
        cy.contains('Amount: 1010 USD')

        cy.get('.sweet-alert').then(($element) => {
            const alert_text = $element.text();
            cy.log(`Purchase Overview : ${alert_text}`);
        });

    }

}
