Feature: Registration
  As a user of giftrete, I want to register
  so that i can use the site

  Scenario: Valid Registration
    Given I navigate to giftrete site
    When I go to the registration page
    And I fill in all the registration data
    Then I should be able to register