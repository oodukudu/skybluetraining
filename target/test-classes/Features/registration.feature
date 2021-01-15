Feature: Registration
  As a user of giftrete, I want to register
  so that i can use the site

  Scenario: Valid Registration
    Given I navigate to dev.giftrt.com
    When I click on register link
    And I fill in all the registration data
    And I click on the sign up button
    Then I should be registered

  Scenario: Invalid Registration
    Given I navigate to dev.giftrt.com
    When I click on register link
    And I fill in all the registration data
    And I click on the sign up button
    Then I should not be registered