import data from './fixtureDesafio-3.json'

import {page} from '../../support/POM/desafio-3.Page'

describe('Products are added to the cart and paid',()=>{

    before('',()=>{
        cy.login(Cypress.env().usuario, Cypress.env().password)
        cy.visit(Cypress.env().homeUrl)
    })
    it('E2E test with SQL Postgree',()=>{
        const query = `select * from "purchaseProducts" pp 
        inner join sells s on pp.sell_id = s.id 
        where s."firstName" = 'Lucas' and s."lastName" = 'Casco'
        ORDER BY s.id  DESC LIMIT 2`

        cy.eliminarProducto(data.product[0].id);
        cy.eliminarProducto(data.product[1].id)
        cy.crearProducto(data.product[0]);
        cy.crearProducto(data.product[1])

        page.clickOnOnlineShopBtn();
        page.get.titleProduct().should('have.contain', 'Products');
        page.selectByID()
       

        let countOneProd = 0
        while (countOneProd < 2) {
            page.typeId(data.product[0].id)
            page.clickOnCardProduct(data.product[0].id);
            page.get.msgAlert().should('have.contain',`${data.product[0].name} has been added to the shopping cart`);
            page.clickOnBtnClose();
            countOneProd++;
        }

        let countTwoProd=0
        while (countTwoProd<2){
            page.typeId(data.product[1].id)
            page.clickOnCardProduct(data.product[1].id);
            page.get.msgAlert().should('have.contain',`${data.product[1].name} has been added to the shopping cart`);
            page.clickOnBtnClose();
            countTwoProd++
        }


        page.clickOnBtnshoppingCard();
        page.goToCheckOut();
        page.typeFirstName(data.firstname);
        page.typeLastName(data.lastname);
        page.typeCardNumber(data.cardNumer);
        page.clickOnPurchaseBtn()
        page.get.purcheSuccessfully().should('have.contain',`${data.firstname} ${data.lastname} has succesfully purchased the following items:`)


        cy.task("connectDB", query).then(result=>{
          
            expect(result[0].lastName).to.be.equal(data.lastname)
            expect(result[0].firstName).to.be.equal(data.firstname)
            expect(result[0].price).to.be.equal("50.00")
            expect(result[0].product).to.be.equal(data.product[0].name)
            expect(result[0].quantity).to.be.equal(2)
            expect(result[0].total_price).to.be.equal("100.00")

            expect(result[1].lastName).to.be.equal(data.lastname)
            expect(result[1].firstName).to.be.equal(data.firstname)
            expect(result[1].price).to.be.equal("40.00")
            expect(result[1].product).to.be.equal(data.product[1].name)
            expect(result[1].quantity).to.be.equal(2)
            expect(result[1].total_price).to.be.equal("80.00")
            
        })
    })


})