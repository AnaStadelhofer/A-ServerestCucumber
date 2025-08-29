const deletarUsuarioRequest = {
    deletarUsuario(id) {
        return cy.request({
            method: "DELETE",
            url: Cypress.env("baseUrl") + "usuarios/" + id,
            failOnStatusCode: false
        })
    }
}

export default deletarUsuarioRequest;