Cypress.automacao = {};

import UsuarioRequest from './Requests/Usuario/index';
import ProdutoRequest from './Requests/Produto/index';

Cypress.automacao.Requests = {
    ...UsuarioRequest,
    ...ProdutoRequest
}