const buscarUsuarioRequest = {
    buscarUsuario(id) {
        return cy.request({
            method: "GET",
            url: cypress.env("url") + "usuarios/" + id,
            failOnStatusCode: false
        })
    }
}

export default buscarUsuarioRequest;