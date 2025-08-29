Feature: Gerenciamento de usuários na API do Serverest

  Background:
    Given Autenticar usuário e obter token válido

  Scenario: Criar um Usuário
    Given que o payload com os dados de criação de usuário esteja corretamente preenchido
    When a requisição for enviada para a API de criação de usuários
    Then deve retornar o status HTTP "201"

  Scenario: Buscar por todos usuários
    When a requisição for enviada para a API de buscar todos usuários
    Then deve retornar o status HTTP "200"
    And a resposta deve conter o total de usuários cadastrados no sistema
  @focus
  Scenario: Buscar por um usuários
    Given que tenha um usuário cadastrado no sistema
    When a requisição for enviada para a API de buscar usuário especifico
    Then deve retornar o status HTTP "201"
    And a resposta deve conter os dados do usuário

# To do:
  Scenario: Editar um usuários
    Given que tenha um usuário cadastrado no sistema
    When que o payload com os novos dados de edição do usuário sejam salvos
    And a requisição for enviada para a API de edição
    Then deve retornar o status HTTP "201"

  Scenario: Deletar um usuário
    Given que tenha um usuário cadastrado no sistema
    When a requisição for enviada para a API de deletar usuário
    Then deve retornar o status HTTO "201"


# Cenários de erro de usuário

# buscar usuário inexistente
# Criar usuário com e-mail duplicado
# Criar usuário sem nome
# Criar usuário sem senha

# Editar um usuário inexistente
# Deletar um usuário inexistente