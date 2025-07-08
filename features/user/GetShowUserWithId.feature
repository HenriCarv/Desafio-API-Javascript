Feature: Get user by ID

Background:
  Given I create new user Administrator

Scenario: Get a specific user
  Given I am authenticated with the new user credentials
  When I request with a id of users
  And the response status code should be 200
  Then the response should contain a user