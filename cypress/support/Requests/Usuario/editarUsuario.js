const editarUsuarioRequest = {
    editarUsuario(payload, id) {
        return cy.request({
            method: "PUT",
            url: cypress.env("url") + "usuarios/" + id,
            failOnStatusCode: false,
            body: payload
        })
    }
}

export default editarUsuarioRequest;