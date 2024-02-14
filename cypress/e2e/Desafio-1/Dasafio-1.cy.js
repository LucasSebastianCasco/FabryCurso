import { onlineShop } from "../../support/POM/desafio-1-.Page";

import data from "./FixtureDesafio-1.json"; 


describe('',()=>{
    beforeEach('',()=>{
        cy.visit('https://pushing-it.vercel.app/')
    })
    const prodName = data.productName;
    const prodID = data.productID;
    const prodPrice= data.ProductPrice;
    const prodCard = data.productCard;
    const titleWell = data.titleWellcom;
    const titleProduct= data.titleProducts;
    const user =  data.loginUser;
    const pass = data.loginPass;

    it('',()=>{
        //logueo y entro a Online shop
        onlineShop.clickOnLoginBtn(); 
        onlineShop.typeUser(user);
        onlineShop.typePassword(pass);
        onlineShop.clickOnSubmitBtn();

        onlineShop.get.titleWelcome().should('have.contain',titleWell);
        onlineShop.clickOnOnlineShopBtn()
        onlineShop.get.titleProduct().should('have.contain',titleProduct)

        //agrego una prenda:
        onlineShop.clickOnAddProductBtn();
        onlineShop.get.formCreateProduct().should('be.exist');
        //complete form 
        onlineShop.typeNameProduct(prodName);
        cy.get('#productPrice').type(prodPrice);
        cy.get('#productCard').type(prodCard)
        cy.get('#productID').type(prodID);
        cy.get('button#createProduct').click();
        cy.wait(2000)

        //mensaje de alerta que se agrego la remera 
        onlineShop.get.alertMsg().eq(2).should('include.text',`${prodName} has been added`);
        onlineShop.clickOnCloseBtn();
        cy.wait(4000)
        //click en deplegable y seleccionamos id 
        onlineShop.selectByID();
        onlineShop.typeId();

        //Elimino producto
        onlineShop.clickOnDeleteIcon();
        onlineShop.clickOnDeleteBtn();
        onlineShop.get.deleteMsg().should('include.text',`${prodName} has been deleted`);
        onlineShop.clickOnCloseBtn();


       //click en deplegable y seleccionamos id 
       onlineShop.selectByID();
       onlineShop.typeId();
       

    })
})