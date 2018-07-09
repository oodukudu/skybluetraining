Feature: WishList
  As a user of giftrete, I want to create wishlist for myself

  Scenario: WishList
    Given I navigate to dev.giftrt.com
    And I click on wishlist
    And i click on create wishlist
    When i fill in all the necessary information
    And i validate captcha
    And i click save
    Then my wishlist should be created