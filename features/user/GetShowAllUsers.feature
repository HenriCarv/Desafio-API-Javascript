Feature: Get all users

Background:
  Given I create new user Administrator

Scenario: Get all users
  Given I am authenticated with the new user credentials
  When I request all users
  And the response status code should be 200
  Then the response should contain a list of users