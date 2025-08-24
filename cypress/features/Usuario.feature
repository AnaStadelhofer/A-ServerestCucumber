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
    When for preenchido o payload com os dados de busca do usuário
    And a requisição for enviada para a API de buscar usuário especifico
    Then deve retornar o status HTTP "201"
    And a resposta deve conter os dados do usuário

  Scenario: Editar um usuários

  Scenario: Deletar um usuário
