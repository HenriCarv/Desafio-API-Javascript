Feature: Post Login

Background:
  Given I create new user Administrator

Scenario: Post Login
  Given I am authenticated with the new user credentials
  Then the response status code should be 201