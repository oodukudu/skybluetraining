Feature: Post AD
  As a user of giftrete, I want to post an Ad on the site.

  Scenario: Post Ad
    Given I navigate to giftrete site
    And I log-in as a user of the site
    And i click on the Post Ad link
    When i fill in all the post Ad information
    And i validate captcha
    And i click submit
    Then the ad should be posted on the site
