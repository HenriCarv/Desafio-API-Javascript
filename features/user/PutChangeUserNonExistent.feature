Feature: Put Change user Non-Existent

Background:
  Given I create new user Administrator

Scenario: Put Change user Non-Existent
  Given I am authenticated with the new user credentials
  When i change a user non-existent
  And the response status code should be 201
  Then the response should contain a error message