const buscarProdutoRequest = {
    buscarProduto(id) {
        return cy.request({
            method: "GET",
            url: Cypress.env("baseUrl") + "produtos/" + id,
            failOnStatusCode: false
        })
    }
}

export default buscarProdutoRequest;