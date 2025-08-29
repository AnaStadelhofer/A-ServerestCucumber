const criarProdutoRequest = {
    criarProduto(payload) {
        return cy.request({
            method: "POST",
            url: Cypress.env("baseUrl") + "produtos/",
            failOnStatusCode: false,
            body: payload
        })
    }
}

export default criarProdutoRequest;