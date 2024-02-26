Cypress.Commands.add('eliminarProducto',(id)=>{
    cy.request({
        method: "GET",
        url: `${Cypress.env().baseUrlAPI}/products?id=${id}`,
        failOnStatusCode:false,
        headers: {
            Authorization:`Bearer ${Cypress.env().token}`
        }
    }).its('body.products.docs').each((product) => {
        cy.request({
            method: "DELETE",
            url: `${Cypress.env().baseUrlAPI}/product/${product._id}`,
            headers: {
                Authorization: `Bearer ${Cypress.env().token}`,
            }
        });
    });
})

Cypress.Commands.add('crearProducto', (body) => {
    cy.request({
        method: "POST",
        url: `${Cypress.env().baseUrlAPI}/create-product`,
        body: body,
    });
});




Cypress.Commands.add('editarProduc', (newName, newPricer ,newImg) => {
    cy.window().then(() => {
        const idProdResp = Cypress.env('idProdResp');

        cy.request({
            method: "PUT",
            url: `${Cypress.env().baseUrlAPI}/product/${idProdResp}`,
            headers: {
                Authorization: `Bearer ${Cypress.env().token}`
            },
            body: {
                newName: newName,
                newPricer: newPricer,
                newImg: newImg,
            },
        }).then(response => {
            Cypress.env('newName', response.body.product.name);
            Cypress.env('newPricer', response.body.product.precio);
            Cypress.env('newImg', response.body.product.img);
            
        });
    });
});


Cypress.Commands.add('editarProducto', (id, newName, newPricer, newImg) => {
    cy.request({
        method: "GET",
        url: `${Cypress.env().baseUrlAPI}/products?id=${id}`,
        failOnStatusCode: false,
        headers: {
            Authorization: `Bearer ${Cypress.env().token}`
        }
    }).then(response => {
        
        const product = response.body.products.docs[0];
        cy.request({
            method: "PUT",
            url: `${Cypress.env().baseUrlAPI}/product/${product._id}`,
            headers: {
                Authorization: `Bearer ${Cypress.env().token}`,
            },
            body: {
                name: newName,
                price: newPricer,
                img: newImg,
            },
        }).as('updatedProductResponse')
    });
}); 