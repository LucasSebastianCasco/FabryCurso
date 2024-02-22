import { onlineShop } from "../../support/POM/desafio-1-.Page";

import data from "./FixtureDesafio-1.json"; 



describe('',()=>{
    beforeEach('',()=>{
        cy.visit('https://pushing-it.vercel.app/')
    })


    it('',()=>{
        cy.log(data)
        //logueo y entro a Online shop
        onlineShop.clickOnLoginBtn();
        onlineShop.typeUser(data.loginUser);
        onlineShop.typePassword(data.loginPass);
        onlineShop.clickOnSubmitBtn();
        

        onlineShop.get.titleWelcome().should('have.contain',data.titleWellcom);
        onlineShop.clickOnOnlineShopBtn()
        onlineShop.get.titleProduct().should('have.contain',data.titleProducts)

        //agrego una prenda:
        onlineShop.clickOnAddProductBtn();
        onlineShop.get.formCreateProduct().should('be.exist');
        //complete form 
        onlineShop.typeNameProduct(data.productName);
        onlineShop.typePriceProduct(data.ProductPrice)
        onlineShop.typeProductCard(data.productCard)
        onlineShop.typeProductID(data.productID)
        onlineShop.clickOnCreateProductBtn();
        

        //mensaje de alerta que se agrego la remera 
        onlineShop.get.alertMsg().eq(2).should('include.text',`${data.productName} has been added`);
        onlineShop.clickOnCloseBtn();
        
        //click en deplegable y seleccionamos id 
        onlineShop.selectByID();
        onlineShop.get.searchInput().clear()
        onlineShop.typeId(data.productID);

        //Elimino producto
        onlineShop.clickOnDeleteIcon(data.productID);
        onlineShop.clickOnDeleteBtn();
        onlineShop.get.deleteMsg().should('include.text',`${data.productName} has been deleted`);
        onlineShop.clickOnCloseBtn();


       //click en deplegable y seleccionamos id 
       onlineShop.selectByID();
       onlineShop.typeId(data.productID);

       //verifico que no exista el producto
       onlineShop.get.gridOfProduct().should('not.have.text')


       //logout
        onlineShop.clickOnLogoutBtn();
    })
})