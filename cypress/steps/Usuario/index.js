const Requests = Cypress.automacao.Requests.UsuarioRequest;
import { faker } from '@faker-js/faker';
import { expect } from 'chai';
let Payload = {};

Given("que o payload com os dados de criação de usuário esteja corretamente preenchido", () => {
    cy.fixture("Usuario/criarUsuario").then((dados) => {
        const firstName = faker.person.firstName();
        const email = faker.internet.email();
        const password = faker.internet.password();

        Payload = { ...dados };
        Payload.nome = firstName;
        Payload.email = email;
        Payload.password = password;
    })
})

When("a requisição for enviada para a API de criação de usuários", () => {
    Requests.criarUsuario(Payload).then((response) => {
        cy.wrap(response).as("response");
        cy.log(response);
    })
})

When("a requisição for enviada para a API de buscar todos usuários", () => {
    Requests.buscarTodosUsuarios().then((response) => {
        cy.wrap(response).as("response");
        cy.log(response);
    })
})

Then("a resposta deve conter o total de usuários cadastrados no sistema", () => {
    cy.get("@response").then((response) => {
        expect(response.body.quantidade).to.be.greaterThan(0)
        expect(response.body.usuarios.length).to.be.greaterThan(0)
    })
})