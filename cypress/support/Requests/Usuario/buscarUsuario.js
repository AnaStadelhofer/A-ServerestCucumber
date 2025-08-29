const buscarUsuarioRequest = {
    buscarUsuario(id) {
        return cy.request({
            method: "GET",
            url: Cypress.env("baseUrl")+ "usuarios/" + id,
            failOnStatusCode: false
        })
    }
}

export default buscarUsuarioRequest;