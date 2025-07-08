Feature: Delete user by ID

Background:
  Given I create new user Administrator

Scenario: Delete user by ID
  Given I am authenticated with the new user credentials
  When I request a delete with a id of user
  And the response status code should be 200
  Then the response should contain a success message