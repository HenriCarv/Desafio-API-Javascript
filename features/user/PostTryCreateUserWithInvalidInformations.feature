Feature: Try creating a user with invalid information

Scenario: Try creating a user with invalid information
  Given I am trying to create a user with invalid informations
  Then the response status code should be 400
  And the response should contain a error message