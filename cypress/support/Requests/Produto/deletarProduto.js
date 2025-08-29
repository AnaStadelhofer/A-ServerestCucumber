const deletarProdutoRequest = {
    deletarProduto(id) {
        return cy.request({
            method: "DELETE",
            url: Cypress.env("baseUrl") + "produtos/" + id,
            failOnStatusCode: false
        })
    }
}

export default deletarProdutoRequest;