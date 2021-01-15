$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WishList.feature");
formatter.feature({
  "line": 1,
  "name": "WishList",
  "description": "As a user of giftrete, I want to create wishlist for myself",
  "id": "wishlist",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "WishList",
  "description": "",
  "id": "wishlist;wishlist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to www.giftrete.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on wishlist",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "i click on create wishlist",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "i fill in all the necessary information",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "i validate captcha",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i click save",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "my wishlist should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "WishList.iNavigateToWwwGiftreteCom()"
});
formatter.result({
  "duration": 256720335,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat StepDefinitions.WishList.iNavigateToWwwGiftreteCom(WishList.java:13)\n\tat ✽.Given I navigate to www.giftrete.com(WishList.feature:5)\n",
  "status": "pending"
});
formatter.match({
  "location": "WishList.iClickOnWishlist()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WishList.iClickOnCreateWishlist()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WishList.iFillInAllTheNecessaryInformation()"
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
  "location": "WishList.iClickSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WishList.myWishlistShouldBeCreated()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("login.feature");
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
  "duration": 17135910733,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheLoginPage()"
});
formatter.result({
  "duration": 103616,
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
formatter.step({
  "line": 14,
  "name": "I close the broswer",
  "keyword": "And "
});
formatter.match({
  "location": "Login.iEnterTheUsername()"
});
formatter.result({
  "duration": 47753,
  "status": "passed"
});
formatter.match({
  "location": "Login.iEnterThePassword()"
});
formatter.result({
  "duration": 287763,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheSignInButton()"
});
formatter.result({
  "duration": 30324,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldBeAbleToLogIn()"
});
formatter.result({
  "duration": 46787,
  "status": "passed"
});
formatter.match({
  "location": "Login.iCloseTheBroswer()"
});
formatter.result({
  "duration": 4081958520,
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
  "duration": 15855563309,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheLoginPage()"
});
formatter.result({
  "duration": 26476,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login with invalid password",
  "description": "",
  "id": "login;login-with-invalid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@invalid"
    },
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I enter correct username",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter incorrect password",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should not be able to log-in",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I close the broswer",
  "keyword": "And "
});
formatter.match({
  "location": "Login.iEnterCorrectUsername()"
});
formatter.result({
  "duration": 34565,
  "status": "passed"
});
formatter.match({
  "location": "Login.iEnterIncorrectPassword()"
});
formatter.result({
  "duration": 34674,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnTheSignInButton()"
});
formatter.result({
  "duration": 29893,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldNotBeAbleToLogIn()"
});
formatter.result({
  "duration": 35241,
  "status": "passed"
});
formatter.match({
  "location": "Login.iCloseTheBroswer()"
});
