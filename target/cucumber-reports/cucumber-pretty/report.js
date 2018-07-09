$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "As a user of giftrete, I want to login to the site",
  "id": "login",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to dev.giftrt.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "Login.iNavigateToDevGiftrtCom()"
});
formatter.result({
  "duration": 12412467517,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheLoginPage()"
});
formatter.result({
  "duration": 25927,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Valid Login",
  "description": "",
  "id": "login;valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@valid"
    },
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter the username",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter the password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should be able to log-in",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.iEnterTheUsername()"
});
formatter.result({
  "duration": 25707,
  "status": "passed"
});
formatter.match({
  "location": "Login.iEnterThePassword()"
});
formatter.result({
  "duration": 33667,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheSignInButton()"
});
formatter.result({
  "duration": 29548,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldBeAbleToLogIn()"
});
formatter.result({
  "duration": 29206,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to dev.giftrt.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "Login.iNavigateToDevGiftrtCom()"
});
formatter.result({
  "duration": 12104667506,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheLoginPage()"
});
formatter.result({
  "duration": 73152,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login with invalid password",
  "description": "",
  "id": "login;login-with-invalid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@invalid"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I enter correct username",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter incorrect password",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should not be able to log-in",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.iEnterCorrectUsername()"
});
formatter.result({
  "duration": 34365,
  "status": "passed"
});
formatter.match({
  "location": "Login.iEnterIncorrectPassword()"
});
formatter.result({
  "duration": 30959,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheSignInButton()"
});
formatter.result({
  "duration": 27811,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldNotBeAbleToLogIn()"
});
formatter.result({
  "duration": 29983,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to dev.giftrt.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "Login.iNavigateToDevGiftrtCom()"
});
formatter.result({
  "duration": 9061493749,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheLoginPage()"
});
formatter.result({
  "duration": 20667,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login with invalid username",
  "description": "",
  "id": "login;login-with-invalid-username",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I enter invalid username",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should not be able to log-in",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.iEnterInvalidUsername()"
});
formatter.result({
  "duration": 27358,
  "status": "passed"
});
formatter.match({
  "location": "Login.iEnterValidPassword()"
});
formatter.result({
  "duration": 32609,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheSignInButton()"
});
formatter.result({
  "duration": 28015,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldNotBeAbleToLogIn()"
});
formatter.result({
  "duration": 39848,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to dev.giftrt.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "Login.iNavigateToDevGiftrtCom()"
});
formatter.result({
  "duration": 16359700003,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheLoginPage()"
});
formatter.result({
  "duration": 40889,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Login with parameters",
  "description": "",
  "id": "login;login-with-parameters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I enter the username \"oodukudu@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter the password \"oodukudu1\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should be able to log-in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "oodukudu@gmail.com",
      "offset": 22
    }
  ],
  "location": "Login.iEnterTheEmailAddress(String)"
});
formatter.result({
  "duration": 4596849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oodukudu1",
      "offset": 22
    }
  ],
  "location": "Login.iEnterThePassword(String)"
});
formatter.result({
  "duration": 83511,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheSignInButton()"
});
formatter.result({
  "duration": 25346,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldBeAbleToLogIn()"
});
formatter.result({
  "duration": 27810,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to dev.giftrt.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "Login.iNavigateToDevGiftrtCom()"
});
formatter.result({
  "duration": 9954033326,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheLoginPage()"
});
formatter.result({
  "duration": 23846,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Invalid Login with parameters",
  "description": "",
  "id": "login;invalid-login-with-parameters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "I enter the username \"oodukudu.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter the password \"oodukudu100\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should not be able to log-in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "oodukudu.com",
      "offset": 22
    }
  ],
  "location": "Login.iEnterTheEmailAddress(String)"
});
formatter.result({
  "duration": 80105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oodukudu100",
      "offset": 22
    }
  ],
  "location": "Login.iEnterThePassword(String)"
});
formatter.result({
  "duration": 71531,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheSignInButton()"
});
formatter.result({
  "duration": 23632,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldNotBeAbleToLogIn()"
});
formatter.result({
  "duration": 26737,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "login with multiple users",
  "description": "",
  "id": "login;login-with-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I enter the username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter the password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I should be able to log-in",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I log out",
  "keyword": "And "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "login;login-with-multiple-users;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 52,
      "id": "login;login-with-multiple-users;;1"
    },
    {
      "cells": [
        "oodukudu@gmail.com",
        "oodukudu1"
      ],
      "line": 53,
      "id": "login;login-with-multiple-users;;2"
    },
    {
      "cells": [
        "oodukudu@yahoo.com",
        "oodukudu200"
      ],
      "line": 54,
      "id": "login;login-with-multiple-users;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to dev.giftrt.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "Login.iNavigateToDevGiftrtCom()"
});
formatter.result({
  "duration": 12795598136,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheLoginPage()"
});
formatter.result({
  "duration": 27198,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "login with multiple users",
  "description": "",
  "id": "login;login-with-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I enter the username \"oodukudu@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter the password \"oodukudu1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I should be able to log-in",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "oodukudu@gmail.com",
      "offset": 22
    }
  ],
  "location": "Login.iEnterTheEmailAddress(String)"
});
formatter.result({
  "duration": 100602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oodukudu1",
      "offset": 22
    }
  ],
  "location": "Login.iEnterThePassword(String)"
});
formatter.result({
  "duration": 77591,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheSignInButton()"
});
formatter.result({
  "duration": 35217,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldBeAbleToLogIn()"
});
formatter.result({
  "duration": 24348,
  "status": "passed"
});
formatter.match({
  "location": "Login.iLogOut()"
});
formatter.result({
  "duration": 30267,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to dev.giftrt.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "Login.iNavigateToDevGiftrtCom()"
});
formatter.result({
  "duration": 9828026548,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheLoginPage()"
});
formatter.result({
  "duration": 57746,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "login with multiple users",
  "description": "",
  "id": "login;login-with-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I enter the username \"oodukudu@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter the password \"oodukudu200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I should be able to log-in",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "oodukudu@yahoo.com",
      "offset": 22
    }
  ],
  "location": "Login.iEnterTheEmailAddress(String)"
});
formatter.result({
  "duration": 83924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oodukudu200",
      "offset": 22
    }
  ],
  "location": "Login.iEnterThePassword(String)"
});
formatter.result({
  "duration": 62887,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheSignInButton()"
});
formatter.result({
  "duration": 19475,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldBeAbleToLogIn()"
});
formatter.result({
  "duration": 146123,
  "status": "passed"
});
formatter.match({
  "location": "Login.iLogOut()"
});
formatter.result({
  "duration": 30902,
  "status": "passed"
});
formatter.uri("postad.feature");
formatter.feature({
  "line": 1,
  "name": "Post AD",
  "description": "As a user of giftrete, I want to post an Ad on the site.",
  "id": "post-ad",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Post Ad",
  "description": "",
  "id": "post-ad;post-ad",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to giftrete site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I log-in as a user of the site",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "i click on the Post Ad link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "i fill in all the post Ad information",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "i validate captcha",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i click submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the ad should be posted on the site",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.i_navigate_to_giftrete_site()"
});
formatter.result({
  "duration": 2358834,
  "status": "passed"
});
formatter.match({
  "location": "PostAd.iLogInAsAUserOfTheSite()"
});
formatter.result({
  "duration": 19258999,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat StepDefinitions.PostAd.iLogInAsAUserOfTheSite(PostAd.java:12)\n\tat ✽.And I log-in as a user of the site(postad.feature:6)\n",
  "status": "pending"
});
formatter.match({
  "location": "PostAd.iClickOnThePostAdLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PostAd.iFillInAllThePostAdInformation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PostAd.iValidateCaptcha()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PostAd.iClickSubmit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PostAd.theAdShouldBePostedOnTheSite()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("registration.feature");
formatter.feature({
  "line": 1,
  "name": "Registration",
  "description": "As a user of giftrete, I want to register\nso that i can use the site",
  "id": "registration",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Valid Registration",
  "description": "",
  "id": "registration;valid-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I navigate to giftrete site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I go to the registration page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I fill in all the registration data",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be able to register",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.i_navigate_to_giftrete_site()"
});
formatter.result({
  "duration": 52235,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.i_go_to_the_registration_page()"
});
formatter.result({
  "duration": 40709,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.i_fill_in_all_the_registration_data()"
});
formatter.result({
  "duration": 39099,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.i_should_be_able_to_register()"
});
formatter.result({
  "duration": 37930,
  "status": "passed"
});
});