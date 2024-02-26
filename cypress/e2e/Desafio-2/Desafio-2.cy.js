import data from './FixtureDesafio-2.json'
import { onlineShop }  from '../../support/POM/desafio-2.Page';


describe('',()=>{
        before('',()=>{
            cy.login(Cypress.env().usuario, Cypress.env().password)
            cy.visit(Cypress.env().homeUrl)
        })
        it('',()=>{
           cy.eliminarProducto(data.product.id);
           cy.crearProducto(data.product);
           cy.editarProducto(data.product.id, data.newProduct.name , data.newProduct.precio, data.newProduct.img); 

            //ingreso al front
           onlineShop.clickOnOnlineShopBtn()
           onlineShop.get.titleProduct().should('have.contain', 'Products')
           onlineShop.selectByID();
           onlineShop.typeId(data.product.id);
           onlineShop.clickOnEditIcon(data.product.id);
           onlineShop.get.titleEditingProduct().should('have.contain','Editing Product')
        
           // tomo la data del response del edit
        cy.get('@updatedProductResponse').then(response => {
            const newName = response.body.product.name;
            const newPricer = response.body.product.price;
            const newImg = response.body.product.img;
            onlineShop.get.productName().should('have.value', newName);
            onlineShop.get.productPricer().should('have.value',newPricer )
            onlineShop.get.productImg().should('have.value',newImg )
           
          });
    });


});

