package StepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Login {
    @Given("^I navigate to dev.giftrt.com$")
    public void iNavigateToDevGiftrtCom() throws Throwable {

        //if you didn't update the Path system variable to add the full directory path to the executable as above mentioned then doing this directly through code
        System.setProperty("webdriver.gecko.driver", "/Users/oyinodukudu/IdeaProjects/skybluetraining/src/test/resources/geckodriver");

        WebDriver driver = new FirefoxDriver();

        String appUrl = "http://www.dev.giftrt.com";
        driver.get(appUrl);
    }

    @When("^I click on the login page$")
    public void iClickOnTheLoginPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
       // throw new PendingException();
    }

    @And("^I enter the username$")
    public void iEnterTheUsername() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
    }

    @And("^I enter the password$")
    public void iEnterThePassword() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
       // throw new PendingException();
    }

    @And("^I click on the sign in button$")
    public void iClickOnTheSignInButton() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
       // throw new PendingException();
    }

    @Then("^I should be able to log-in$")
    public void iShouldBeAbleToLogIn() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
    }

    @And("^I enter correct username$")
    public void iEnterCorrectUsername() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
       // throw new PendingException();
    }

    @And("^I enter incorrect password$")
    public void iEnterIncorrectPassword() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
    }

    @Then("^I should not be able to log-in$")
    public void iShouldNotBeAbleToLogIn() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
    }

    @And("^I enter invalid username$")
    public void iEnterInvalidUsername() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
    }

    @And("^I enter valid password$")
    public void iEnterValidPassword() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
    }

    @And("^I enter the username \"([^\"]*)\"$")
    public void iEnterTheEmailAddress(String username) throws Throwable {


    }

    @And("^I enter the password \"([^\"]*)\"$")
    public void iEnterThePassword(String password) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
    }

    @And("^I log out$")
    public void iLogOut() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
       // throw new PendingException();
    }
}
