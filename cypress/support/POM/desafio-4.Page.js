class Page{
    get={
        onlineShopButton: ()=> cy.contains('Online Shop'),
        titleProduct:()=> cy.get('#title'),
        elementID:()=> cy.get('[id="search-type"]',{timeout:4000}),
        searchInput: ()=> cy.get('[data-cy="search-bar"]',{timeout:4000}),
        carProduct: id=> cy.get(`[id="add-to-cart-${id}"]`),

        msgAlert:()=> cy.get('[id^="chakra-modal"] [class*="chakra-modal"]').eq(2),
        btnCloseAlert:()=> cy.get('[data-cy="closeModal"]'),
        productList:()=>cy.get('[data-cy="goShoppingCart"]'),

        showTotalPriceBtn:()=> cy.contains('Show total price'),
        quantityproduct:()=> cy.get('[data-cy="productAmount"]'),
        productName:()=> cy.get('[data-cy="productName"]'),
        priceProduct:()=> cy.get('[data-cy="unitPrice"]'),
        totalPriceProduct:()=> cy.get('[data-cy="totalPrice"]'),

        totalSumProducts:()=> cy.get('p[id="price"]'),

        billingSumaryBtn:()=> cy.get('[data-cy="goBillingSummary"]'),

        subTotal:()=> cy.get('[data-cy="subtotalAmount"]'),
        totalPrice:()=> cy.get('[data-cy="totalPriceAmount"]'),

        checkoutBtn:()=> cy.get('[data-cy="goCheckout"]'),
        firstName:()=> cy.get('[data-cy="firstName"]'),
        lastName:()=> cy.get('[data-cy="lastName"]'),
        cardNumber:()=> cy.get('[data-cy="cardNumber"]'),
        purchaseBtn:()=> cy.get('[data-cy="purchase"]'),

        purcheSuccessfully:()=> cy.get('[id^="chakra-modal"]',{timeout:4000}).eq(5),
        thakYouBtn: () =>cy.get('[data-cy="thankYou"]'),

        sellID:()=> cy.get('[data-cy="sellId"]'),

        logOut:()=> cy.get('[data-cy="logout"]')
    }

    clickOnOnlineShopBtn(){
        this.get.onlineShopButton().click();
    }

    selectByID(){
        this.get.elementID().select('id');
    }
    typeId(id){
        this.get.searchInput().clear().type(`${id}{enter}`);
    }

    clickOnCardProduct(id){
        this.get.carProduct(id).click();
    }

    clickOnBtnClose(){
        this.get.btnCloseAlert().click();
    }

    clickOnBtnshoppingCard(){
        this.get.productList().click();
    }

    clickOnShowTotalPricer(){
        this.get.showTotalPriceBtn().click();
    }

    clickOnbillingBtn(){
        this.get.billingSumaryBtn().click();
    }

    goToCheckOut(){
        this.get.checkoutBtn().click();
    }

    typeFirstName(fname){
        this.get.firstName().type(fname);
    }

    typeLastName(lname){
        this.get.lastName().type(lname);
    }

    typeCardNumber(card){
        this.get.cardNumber().type(card);
    }

    clickOnPurchaseBtn(){
        this.get.purchaseBtn().click();
    }

    clickOnthakBtn(){
        this.get.thakYouBtn().click();
    }

    clickOnlogOutBtn(){
        this.get.logOut().click()
    }
}

export const page = new Page;