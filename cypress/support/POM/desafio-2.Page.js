class onlineshop {
    get={
        //click en array y selecion de id element
        onlineShopButton: ()=> cy.contains('Online Shop'),
        titleProduct:()=> cy.get('#title'),
        elementID:()=> cy.get('[id="search-type"]',{timeout:4000}),
        searchInput: ()=> cy.get('[data-cy="search-bar"]'),

        //buscar el producto 
        gridOfProduct:()=> cy.get('[class^="chakra-skeleton"]'),

        //editProduct
        editProductIcon: id=> cy.get(`[data-cy="edit-${id}"]`),
        
        //formulario de edicion
        titleEditingProduct: ()=> cy.get('[id^="chakra-modal-"]').eq(1),
        productName:()=> cy.get('[data-cy="productName"]'),
        productPricer:()=> cy.get('[data-cy="productPrice"]'),
        productImg:()=> cy.get('[data-cy="productCard"]')
    }

    clickOnOnlineShopBtn(){
        this.get.onlineShopButton().click()
    }

    selectByID(){
        this.get.elementID().select('id');
    }

    typeId(id){
        this.get.searchInput().clear().type(`${id}{enter}`);
    }

    clickOnEditIcon(id){
        this.get.editProductIcon(id).click({timeout:4000})
    }

}

export const onlineShop = new onlineshop;