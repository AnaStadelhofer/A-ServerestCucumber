const buscarTodosUsuariosRequest = {
    buscarTodosUsuarios() {
        return cy.request({
            method: "GET",
            url: Cypress.env("baseUrl") + "usuarios/",
            failOnStatusCode: false
        })
    }
}

export default buscarTodosUsuariosRequest;