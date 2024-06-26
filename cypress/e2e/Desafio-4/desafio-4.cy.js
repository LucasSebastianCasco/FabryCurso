import {page} from '../../support/POM/desafio-4.Page'
describe('Desafio 4',()=>{
    before('',()=>{
        cy.login(Cypress.env().usuario, Cypress.env().password)
        cy.visit(Cypress.env().homeUrl)
  
    })

    it('Validacion sumar 2 prendas de 2 productos y finalizacion de la compras',()=>{
        cy.fixture("fixturedesafio-4.json").then((data)=>{

            console.log(data)
            cy.eliminarProducto(data.product[0].id);
            cy.eliminarProducto(data.product[1].id)
            cy.crearProducto(data.product[0]);
            cy.crearProducto(data.product[1]);

            page.clickOnOnlineShopBtn();
            page.get.titleProduct().should('have.contain', 'Products');
            page.selectByID();


            function addProductOne() {
                page.typeId(data.product[0].id);
                page.clickOnCardProduct(data.product[0].id);
                page.get.msgAlert().should('have.contain', `${data.product[0].name} has been added to the shopping cart`);
                page.clickOnBtnClose();
            }  
            addProductOne();
            addProductOne();

            function addProductTwo(){
                page.typeId(data.product[1].id)
                page.clickOnCardProduct(data.product[1].id);
                page.get.msgAlert().should('have.contain',`${data.product[1].name} has been added to the shopping cart`);
                page.clickOnBtnClose();
            }
            
            addProductTwo();
            addProductTwo();

            page.clickOnBtnshoppingCard();
            page.clickOnShowTotalPricer();

            //primer producto
            page.get.quantityproduct().eq(0).should('have.contain',2);
            page.get.productName().eq(0).should('have.contain', data.product[0].name)
            page.get.priceProduct().eq(0).invoke('text').then(unitpricerOne=>{
                const pricerWith$ = `$${data.product[0].price}`
                expect(unitpricerOne).to.be.equal(pricerWith$);
            })
            page.get.totalPriceProduct().eq(0).invoke('text').then(totalPricerOne=>{
                const pricerWith$ = `$${data.product[0].price*2}`
                expect(totalPricerOne).to.be.equal(pricerWith$)
            })

            //segundo producto
            page.get.quantityproduct().eq(1).should('have.contain',2);
            page.get.productName().eq(1).should('have.contain', data.product[1].name)
            page.get.priceProduct().eq(1).invoke('text').then(unitpricerTwo=>{
                const pricerWith$ = `$${data.product[1].price}`
                expect(unitpricerTwo).to.be.equal(pricerWith$);
            })
            page.get.totalPriceProduct().eq(1).invoke('text').then(totalPricerTwo=>{
                const pricerWith$ = `$${data.product[1].price*2}`
                expect(totalPricerTwo).to.be.equal(pricerWith$);
            })
            //pricio total sumando los 2 productos 
            page.get.totalSumProducts().invoke('text').then(price=>{
                let priceOutDecimal = Math.trunc(parseFloat(price))
                expect(priceOutDecimal).to.be.equal((data.product[0].price*2) + (data.product[1].price*2))  
            })

            page.clickOnbillingBtn()

            page.get.subTotal().invoke('text').then(subtotal=>{
                const pricerSum = data.product[0].price*2 + data.product[1].price*2
                const pricerWith$ = `$${pricerSum}`
                expect(subtotal).to.be.equal(pricerWith$)
            })

            page.get.totalPrice().invoke('text').then(totalPrice=>{
                const pricerSum = data.product[0].price*2 + data.product[1].price*2
                const pricerWith$ = `$${pricerSum}`
                expect(totalPrice).to.be.equal(pricerWith$)
            })

            page.goToCheckOut();
            page.typeFirstName(data.firstname);
            page.typeLastName(data.lastname);
            page.typeCardNumber(data.cardNumer);
            page.clickOnPurchaseBtn()

            page.get.purcheSuccessfully().should('have.contain',`${data.firstname} ${data.lastname} has succesfully purchased the following items:`)

            page.get.sellID().invoke('text').as('sellId');
            cy.get('@sellId').then((sellId) => {
                const query = `select * from "purchaseProducts" pp 
                               inner join sells s on pp.sell_id = s.id 
                               where s.id=${sellId}`;
    
                cy.task("connectDB", query).then(result=>{
    
                    expect(result[0].lastName).to.be.equal(data.lastname)
                    expect(result[0].firstName).to.be.equal(data.firstname)
                    expect(parseInt(result[0].price)).to.be.equal(parseInt(data.product[0].price))
                    expect(result[0].product).to.be.equal(data.product[0].name)
                    expect(result[0].quantity).to.be.equal(2)
                    expect(parseInt(result[0].total_price)).to.be.equal(data.product[0].price * 2)
    
                    expect(result[1].lastName).to.be.equal(data.lastname)
                    expect(result[1].firstName).to.be.equal(data.firstname)
                    expect(parseInt(result[1].price)).to.be.equal(parseInt(data.product[1].price))
                    expect(result[1].product).to.be.equal(data.product[1].name)
                    expect(result[1].quantity).to.be.equal(2)
                    expect(parseInt(result[1].total_price)).to.be.equal(data.product[1].price *2)            
                })
            })

            page.clickOnthakBtn()
            page.clickOnlogOutBtn()


        }) 
    })
})