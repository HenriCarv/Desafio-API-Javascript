Feature: Create a new user

Scenario: Create a new user with random details
  Given I create new user Administrator
  Then the response status code should be 201
  And the response should contain a success message