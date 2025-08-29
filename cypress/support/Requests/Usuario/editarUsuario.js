const editarUsuarioRequest = {
    editarUsuario(payload, id) {
        return cy.request({
            method: "PUT",
            url: Cypress.env("baseUrl") + "usuarios/" + id,
            failOnStatusCode: false,
            body: payload
        })
    }
}

export default editarUsuarioRequest;