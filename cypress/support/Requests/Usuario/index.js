import buscarUsuarioRequest from './buscarUsuario';
import buscarTodosUsuariosRequest from './buscarTodosUsuario';
import deletarUsuarioRequest from './deletarUsuario';
import editarUsuarioRequest from './editarUsuario';
import criarUsuarioRequest from './criarUsuario';
import loginRequest from './Login';

const UsuarioRequest = {
    ...buscarUsuarioRequest,
    ...buscarTodosUsuariosRequest,
    ...deletarUsuarioRequest,
    ...editarUsuarioRequest,
    ...criarUsuarioRequest,
    ...loginRequest
}

export default {UsuarioRequest};