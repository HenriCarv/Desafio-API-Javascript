Feature: Post Login Fail

Scenario: Post Login Fail
  Given I try authenticated with user non-existent
  Then the response status code should be 401