Feature: Try creating a user with existing information

Scenario: Try creating a user with existing information
  Given I create a new user with email "beltrano@qa.com.br"
  When I try to create another user with the same email "beltrano@qa.com.br"
  Then the response status code should be 400
  And the response should contain a error message