Feature: Try to get a user with non-existent ID

Background:
  Given I create new user Administrator

Scenario: Try to get a user with non-existent ID
  Given I am authenticated with the new user credentials
  When I request a user with a non-existent ID
  Then the response status code should be 400
  And the response should contain a error message