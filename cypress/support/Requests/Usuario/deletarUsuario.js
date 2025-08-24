const deletarUsuarioRequest = {
    deletarUsuario(id) {
        return cy.request({
            method: "DELETE",
            url: cypress.env("url") + "usuarios/" + id,
            failOnStatusCode: false
        })
    }
}

export default deletarUsuarioRequest;