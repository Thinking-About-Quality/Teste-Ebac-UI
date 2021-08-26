///<reference types="cypress" />


describe('Funcionalidade Página de Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })
    it('Deve selecionar produto da lista ', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //Quando for selecionar um item da list devemos nos atentar a posição do elemento
            //exemplo.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });
    it.only('Deve adicionar o produto ao carrinho', () => {
        var quantidade = 3
        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantidade )
        cy.get('.woocommerce-message').should('contain',quantidade+ ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho')

    });
})
