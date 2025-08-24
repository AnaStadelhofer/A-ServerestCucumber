Then("deve retornar o status HTTP {string}", (status) => {
    cy.get("@response").then((response) => {
        expect(response.status).to.be.equal(parseInt(status));
    })
})

Then("deve retornar o status {string} com a mensagem", (status, mensagem) => {
    cy.get("@response").then((response) => {
        expect(response.status).to.be.equal(parseInt(status));

        expect(response.message).to.be.equal(mensagem);
    })
})