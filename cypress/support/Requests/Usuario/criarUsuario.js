const criarUsuarioRequest = {
    criarUsuario(payload) {
        return cy.request({
            method: "POST",
            url: Cypress.env("baseUrl") + "usuarios",
            failOnStatusCode: false,
            header: {
                Authorization:  Cypress.env("token")
            },
            body: payload
        })
    }
}

export default criarUsuarioRequest;