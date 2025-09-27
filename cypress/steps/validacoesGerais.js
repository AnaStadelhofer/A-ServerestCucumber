Then("deve retornar o status HTTP {string}", (status) => {
    cy.get("@response").then((response) => {
        expect(response.status).to.be.equal(parseInt(status));
        expect(response.statusText).to.be.equal("OK");
    })
})

Then("deve retornar o status HTTP {string} com a mensagem {string}", (status, message) => {
    cy.get("@response").then((response) => {
        expect(response.status).to.be.equal(parseInt(status));
        expect(response.body.message).to.be.equal(message);
    })
})

Then("deve retornar o status HTTP {string} de erro", (status) => {
    cy.get("@response").then((response) => {
        expect(response.status).to.be.equal(parseInt(status));
    })
})

Then("o campo {string} com a mensagem {string}", (campo, mensagem) => {
    cy.get("@response").then((response) => {
        expect(response.body[campo]).to.be.equal(mensagem);
    })
})