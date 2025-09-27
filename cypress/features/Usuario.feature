Feature: Gerenciamento de usuários na API do Serverest

  Background:
    Given Autenticar usuário e obter token válido

  Scenario: Criar um usuário
    Given que o payload com os dados de criação de usuário esteja corretamente preenchido
    When a requisição for enviada para a API de criação de usuários
    Then deve retornar o status HTTP "201" com a mensagem "Cadastro realizado com sucesso"

  Scenario: Buscar por todos usuários
    When a requisição for enviada para a API de buscar todos usuários
    Then deve retornar o status HTTP "200"
    And a resposta deve conter o total de usuários cadastrados no sistema

  Scenario: Buscar por um usuário recem criado
    Given que tenha um usuário cadastrado no sistema
    When a requisição for enviada para a API de buscar usuário especifico
    Then deve retornar o status HTTP "200"
    And a resposta deve conter os dados do usuário

  Scenario: Editar um usuário recem criado
    Given que tenha um usuário cadastrado no sistema
    When que o payload com os novos dados de edição do usuário sejam salvos
    And a requisição for enviada para a API de edição
    Then deve retornar o status HTTP "200" com a mensagem "Registro alterado com sucesso"

  Scenario: Deletar um usuário
    Given que tenha um usuário cadastrado no sistema
    When a requisição for enviada para a API de deletar usuário
    Then deve retornar o status HTTP "200" com a mensagem "Registro excluído com sucesso"

  Scenario: Criar usuário com e-mail duplicado
    Given que tenha um usuário cadastrado no sistema
    When for preenchido o payload de criação de usuário com e-mail duplicado
    And a requisição for enviada para a API de criação de usuários
    Then deve retornar o status HTTP "201" com a mensagem "Cadastro realizado com sucesso"

  Scenario Outline: Tentar criar usuário sem o campo "<Campo>"
    Given que o payload seja preenchido sem o campo "<Campo>"
    When a requisição for enviada para a API de criação de usuários
    Then deve retornar o status HTTP "400" de erro
    And o campo "<Campo>" com a mensagem "<Mensagem>"

    Examples:
      | Campo    | Mensagem               |
      | nome     | nome é obrigatório     |
      | email    | email é obrigatório    |
      | password | password é obrigatório |

  Scenario: Editar um usuário inexistente
    Given que tenha um usuário cadastrado no sistema
    When que o payload com os novos dados de edição do usuário sejam salvos mas informar o id
    And a requisição for enviada para a API de edição
    Then deve retornar o status HTTP "405" com a mensagem "Não é possível realizar PUT em /usuarios/. Acesse https://serverest.dev para ver as rotas disponíveis e como utilizá-las."

  Scenario: Deletar um usuário inexistente
    Given que seja informado um usuário inexistente para deletar
    When a requisição for enviada para a API de deletar usuário
    Then deve retornar o status HTTP "200" com a mensagem "Nenhum registro excluído"

  Scenario: Deletar um usuário sem informar um id
    Given que não seja informado um id de usuário para deletar
    When a requisição for enviada para a API de deletar usuário
    Then deve retornar o status HTTP "405" com a mensagem "Não é possível realizar DELETE em /usuarios/. Acesse https://serverest.dev para ver as rotas disponíveis e como utilizá-las."

