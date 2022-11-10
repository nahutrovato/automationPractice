describe('Enter page and check product grid', () => {

    it('Enter to the main page', () => {
        const url = 'https://practice.automationtesting.in/';
        cy.visit(url);
    });

    it('Check length bottom product', () => {
        const length = 3;
        cy.scrollTo(0,500);
        cy.get('.woocommerce-LoopProduct-link')
            .as('Product grid');
        cy.get('@Product grid').should('have.length', length);
    });

    it('Add first product to cart', () => {
        cy.get('.woocommerce-LoopProduct-link')
            .as('Product grid');
        cy.get('@Product grid')
            .find('h3')
            .each(($elem,$index,$list) => {
                if($elem.contains('Selenium Ruby')){
                }
            })
        
    })
})