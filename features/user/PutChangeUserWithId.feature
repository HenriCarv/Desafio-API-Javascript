Feature: Put Change user by ID

Background:
  Given I create new user Administrator

Scenario: Put Change user by ID
  Given I am authenticated with the new user credentials
  When i change a user
  And the response status code should be 200
  And the response should contain a user with changes
  Then I verify the user by getting the user with ID