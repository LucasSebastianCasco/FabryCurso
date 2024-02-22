class onlineshop {
    get={
        //login
        loginEnter:()=> cy.get('#registertoggle',{ timeout: 1000}),
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
        createProductBtn:()=>cy.get('#createProduct',{timeout:4000}),

        //popup msg
        alertMsg:()=> cy.get('[id^="chakra-modal"]',{timeout:4000}),
        closeModalBtn:() => cy.get('[id="closeModal"]'),

        //click en array y selecion de id element
        elementID:()=> cy.get('[id="search-type"]',{timeout:4000}),
        searchInput: ()=> cy.get('#search-bar'),

        //eliminar productos 
        deleteWithID: id => cy.get(`[id="delete-${id}"]`),
        deleteBtn:()=> cy.contains('Delete'),

        // popup de eliminar producto 
        deleteMsg:()=>cy.get('[id^="chakra-modal"]').eq(2),
        closeModalBtnDelete:()=>cy.get('[id="closeModal"]'),

        //buscar el producto eliminado 
        gridOfProduct:()=> cy.get('[class^="chakra-skeleton"]'),

        //logout button

        logOutBtn: ()=> cy.get('#logout'),
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
        this.get.addProductBtn().click({force: true})
    }

    typeNameProduct(name){
        this.get.nameInput().type(name)
    }

    typePriceProduct(price){
        this.get.priceInput().type(price)
    }

    typeProductCard(card){
        this.get.cardInput().type(card)
    }

    typeProductID(productID){
        this.get.inputId().type(productID)
    }
    clickOnCreateProductBtn(){
        this.get.createProductBtn().click()
    }
    


    clickOnCloseBtn(){
        this.get.closeModalBtn().click();
    }
    selectByID(){
        this.get.elementID().select('id');
    }

    typeId(id){
        this.get.searchInput().clear().type(`${id}{enter}`);
    }

    clickOnDeleteIcon(id){
        this.get.deleteWithID(id).click();   
    }

    clickOnDeleteBtn(){
        this.get.deleteBtn().click();
    }

    clickOnCloseBtn(){
        this.get.closeModalBtnDelete().click();
    }

    clickOnLogoutBtn(){
        this.get.logOutBtn().click();
    }

}

export const onlineShop = new onlineshop;