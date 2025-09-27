import { faker } from '@faker-js/faker'

export function gerarDadosUsuarios(base = {}) {
    const nome = gerarNome();
    const email = gerarEmail();
    const password = gerarSenha();

    Cypress.env("firstName", nome);
    Cypress.env("email", email);
    Cypress.env("password", password);

    return {
        ...base,
        nome,
        email,
        password
    };
}

export function gerarNome() {
    const nome = faker.person.firstName();
    return nome;
}

export function gerarEmail() {
    const email = faker.internet.email();
    return email;
}

export function gerarSenha() {
    const senha = faker.internet.password();
    return senha;
}