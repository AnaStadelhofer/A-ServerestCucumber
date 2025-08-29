const editarProdutoRequest = {
    editarProduto(payload, id) {
        return cy.request({
            method: "PUT",
            url: Cypress.env("baseUrl") + "produtos/" + id,
            failOnStatusCode: false,
            body: payload
        })
    }
}

export default editarProdutoRequest;