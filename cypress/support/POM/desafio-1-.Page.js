class onlineshop {
    get={
        //login
        loginEnter:()=> cy.get('#registertoggle'),
        user:()=> cy.get('[for="user"]'),
        password: ()=> cy.get('[name="pass"]'),
        submitButton:()=>cy.get('#submitForm'),
        titleWelcome:()=> cy.get('[class^="chakra-heading"]',{ timeout: 10000 }).eq(1),
        onliheShopButton: ()=> cy.contains('Online Shop'),
        titleProduct:()=> cy.get('#title'),

        //agregar prenda
        addProductBtn:()=> cy.get('#add-product'),
        formCreateProduct:()=> cy.contains('Create Product'),

        //complete form
        nameInput:()=> cy.get('#productName'),
        priceInput:()=> cy.get('#productPrice'),
        cardInput:()=> cy.get('#productCard'),
        inputId:()=> cy.get('#productID'),
        createProductBtn:()=>cy.get('button#createProduct'),

        //popup msg
        alertMsg:()=> cy.get('[id^="chakra-modal"]'),
        closeModalBtn:() => cy.get('[id="closeModal"]'),

        //click en array y selecion de id element
        elementID:()=> cy.get('[id="search-type"]'),
        searchInput: ()=> cy.get('#search-bar'),

        //eliminar productos 
        deleteWithID:()=> cy.get('[id="delete-1350"]'),
        deleteBtn:()=> cy.contains('Delete'),

        // popup de eliminar producto 
        deleteMsg:()=>cy.get('[id^="chakra-modal"]').eq(2),
        closeModalBtnDelete:()=>cy.get('[id="closeModal"]'),

        //buscar el producto eliminado 
        productDelete:()=> cy.get('#name'),
    }


    clickOnLoginBtn(){ 
        this.get.loginEnter().dblclick();
    }

    typeUser(user){
        this.get.user().type(user);
    }

    typePassword(pass){
        this.get.password().type(pass)
    }

    clickOnSubmitBtn(){
        this.get.submitButton().click();
    }

    selectTitleWel(){
        this.get.titleWelcome().eq(1)
    }

    clickOnOnlineShopBtn(){
        this.get.onliheShopButton().click();
    }

    clickOnAddProductBtn(){
        this.get.addProductBtn().click()
    }

    typeNameProduct(name){
        this.get.nameInput().type(name)
    }

    typePriceProduct(){
        this.get.priceInput().type(60)
    }

    clickOnCloseBtn(){
        this.get.closeModalBtn().click();
    }
    selectByID(){
        this.get.elementID().select('id')
    }

    typeId(){
        this.get.searchInput().type('1350{enter}')
    }

    clickOnDeleteIcon(){
        this.get.deleteWithID().click();   
    }

    clickOnDeleteBtn(){
        this.get.deleteBtn().click()
    }

    clickOnCloseBtn(){
        this.get.closeModalBtnDelete().click()
    }

}

export const onlineShop = new onlineshop;