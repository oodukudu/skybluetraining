Feature: Login
  As a user of giftrete, I want to login to the site

  Background:
    Given I navigate to dev.giftrt.com
    When I click on the login page

    @valid @smoke
  Scenario: Valid Login
    And I enter the username
    And I enter the password
    And I click on the sign in button
    Then I should be able to log-in
    And I close the broswer

    @invalid @regression
  Scenario: Login with invalid password
    And I enter correct username
    And I enter incorrect password
    And I click on the sign in button
    Then I should not be able to log-in
    And I close the broswer

      @invalid
  Scenario: Login with invalid username
    And I enter invalid username
    And I enter valid password
    And I click on the sign in button
    Then I should not be able to log-in
    And I close the broswer


  Scenario: Login with parameters
    And I enter the username "oodukudu@gmail.com"
    And I enter the password "oodukudu1"
    And I click on the sign in button
    Then I should be able to log-in
    And I close the broswer


  Scenario: Invalid Login with parameters
    And I enter the username "oodukudu.com"
    And I enter the password "oodukudu100"
    And I click on the sign in button
    Then I should not be able to log-in
    And I close the broswer


   Scenario Outline: login with multiple users
     And I enter the username "<username>"
     And I enter the password "<password>"
     And I click on the sign in button
     Then I should be able to log-in
     And I log out
     And I close the broswer

     Examples:
     |username|password|
     |oodukudu@gmail.com|oodukudu1|
     |oodukudu@yahoo.com|oodukudu200|