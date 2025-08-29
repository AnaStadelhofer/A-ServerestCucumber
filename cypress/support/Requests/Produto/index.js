import buscarProdutoRequest from './buscarProduto';
import buscarTodosProdutosRequest from './buscarTodosProdutos';
import criarProdutoRequest from './criarProduto';
import deletarProdutoRequest from './deletarProduto';
import editarProdutoRequest from './editarProduto';

const ProdutoRequest = {
    ...buscarProdutoRequest,
    ...buscarTodosProdutosRequest,
    ...criarProdutoRequest,
    ...deletarProdutoRequest,
    ...editarProdutoRequest
}

export default {ProdutoRequest};