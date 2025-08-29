const buscarTodosProdutosRequest = {
    buscarTodosProdutos() {
        return cy.request({
            method: "GET",
            url: Cypress.env("baseUrl") + "produtos/",
            failOnStatusCode: false
        })
    }
}

export default buscarTodosProdutosRequest;