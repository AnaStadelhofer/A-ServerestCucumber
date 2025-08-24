const loginRequest = {
    login(payload) {
        return cy.request({
            method: "POST",
            url: Cypress.env("baseUrl") + "login",
            failOnStatusCode: false,
            body: payload
        })
    }
}

export default loginRequest;