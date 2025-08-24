let Payload = {};
const Requests = Cypress.automacao.Requests.UsuarioRequest;

Given("Autenticar usuário e obter token válido", () => {
    cy.fixture("login").then((dados) => {
        Payload = { ...dados };

        Requests.login(Payload).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.message).to.equal("Login realizado com sucesso");

            Cypress.env("token", response.body.authorization);
            cy.log("Token salvo no env:", Cypress.env("token"));
        });
    });

    cy.log("Token fora do then:", Cypress.env("token")); // undefined ou vazio
});