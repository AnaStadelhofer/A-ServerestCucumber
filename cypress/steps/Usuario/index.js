const Requests = Cypress.automacao.Requests.UsuarioRequest;
import { expect } from 'chai';

let Payload = {};
import { gerarDadosUsuarios } from "../../support/Utils/gerarDados";

// Given - Payloads
Given("que o payload com os dados de criação de usuário esteja corretamente preenchido", () => {
    cy.fixture("Usuario/criarUsuario").then((dados) => {
        Payload = gerarDadosUsuarios(dados);
        cy.log(Payload);
    })
})

Given("que tenha um usuário cadastrado no sistema", () => {
    cy.fixture("Usuario/criarUsuario").then((dados) => {

        Payload = gerarDadosUsuarios(dados);

        Requests.criarUsuario(Payload).then((response) => {
            Cypress.env("id", response.body._id);
            cy.log(Cypress.env("id"));
        })

        cy.log(Payload);
    })
})

Given("que o payload com os novos dados de edição do usuário sejam salvos", () => {
    cy.fixture("Usuario/editarUsuario").then((dados) => {
        Payload = gerarDadosUsuarios(dados);

        Payload.nome = "editado " + Cypress.env("firstName");
        Payload.email = "editado_" + Cypress.env("email");

        cy.log(Payload);
    })
})

Given("que seja informado um usuário inexistente para deletar", () => {
    Cypress.env("id", "id aleatório");
})

Given("que o payload com os novos dados de edição do usuário sejam salvos mas informar o id", () => {
    cy.fixture("Usuario/editarUsuario").then((dados) => {
        Payload = gerarDadosUsuarios(dados);

        Payload.nome = "editado " + Cypress.env("firstName");
        Payload.email = "editado_" + Cypress.env("email");
        Cypress.env("id", "");


        cy.log(Payload);
    })
})

Given("que não seja informado um id de usuário para deletar", () => {
    Cypress.env("id", "");
})

Given("que o payload seja preenchido sem o campo {string}", (campo) => {
    cy.fixture("Usuario/editarUsuario").then((dados) => {
        Payload = gerarDadosUsuarios(dados);
        delete Payload[campo];
    })
})

Given("for preenchido o payload de criação de usuário com e-mail duplicado", () => {
      cy.fixture("Usuario/editarUsuario").then((dados) => {
        Payload = gerarDadosUsuarios(dados);
        Payload.email = Cypress.env("email");
    })  
})

// Requests
When("a requisição for enviada para a API de edição", () => {
    cy.log(Cypress.env("id"));

    Requests.editarUsuario(Payload, Cypress.env("id")).then((response) => {
        cy.wrap(response).as("response");
        cy.log(response);
    })
})

When("a requisição for enviada para a API de buscar usuário especifico", () => {
    Requests.buscarUsuario(Cypress.env("id")).then((response) => {
        cy.wrap(response).as("response");
        cy.log(response);
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

When("a requisição for enviada para a API de deletar usuário", () => {
    Requests.deletarUsuario(Cypress.env("id")).then((response) => {
        cy.wrap(response).as("response");
        cy.log(response);
    })
})

// Validações
Then("a resposta deve conter os dados do usuário", () => {
    cy.get("@response").then((response) => {
        expect(response.body.nome).to.be.equal(Cypress.env("firstName"));
        expect(response.body.email).to.be.equal(Cypress.env("email"));
        expect(response.body._id).to.be.equal(Cypress.env("id"));
        expect(response.body.password).to.be.equal(Cypress.env("password"));
    })
})

Then("a resposta deve conter o total de usuários cadastrados no sistema", () => {
    cy.get("@response").then((response) => {
        expect(response.body.quantidade).to.be.greaterThan(0);
        expect(response.body.usuarios.length).to.be.greaterThan(0);
    })
})
