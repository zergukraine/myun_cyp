import { SignInPage } from "../../pages/signInPage"
import { HomePage } from "../../pages/homePage"
import { CommonMethods } from "../../pages/commonMethods"
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const signInPage = new SignInPage()
const homePage = new HomePage()
const commonMethods = new CommonMethods()
let lastResponse;

Given('Navigate to the SignInPage', () => {
    console.log(signInPage);
    cy.visit(signInPage.url);
});

When('Enter credential on SignInPage', () => {
    signInPage.enterCredentials(signInPage.utilisateur, signInPage.pass);
});

When('Enter username {string} and password {string} on SignInPage', (username, pass) => {
    signInPage.enterCredentials(username, pass);
});

And('Set checkboxes on SignInPage', () => {
    signInPage.setCheckboxes();
});

And('Click submit button on SignInPage', () => {
    signInPage.clickSubmit();
    cy.wait(5000);
});

And('Close browser', () => {
    cy.end();
});

Then('The user avatar is displayed on the home page', () => {
    homePage.avatarIsDisplayedOnHomePage();
});

Then('The week dashboard is displayed on the home page', () => {
    homePage.weekDashboardIsDisplayedOnHomePage();
});

Then('The left menu items are displayed on the home page', () => {
    homePage.leftMenuItemsAreDisplayedOnHomePage();
});

And('Store the access token', () => {
    commonMethods.getAccessToken();
});

Given('The user has an access token', () => {
    const myuAccessToken = commonMethods.readTokenFromFile();
    assert.exists(myuAccessToken, 'No access token found!');
});

When('The user sends a request to change the password from old_password {string} to new_password {string}', (oldPass, newPass) => {
    lastResponse = commonMethods.updatePassword(oldPass, newPass, "https://app.myunisoft.fr");
});

Then('The request should be successful with a status code {int}', (expectedStatusCode) => {
    assert.equal(lastResponse.statusCode, expectedStatusCode);
});
