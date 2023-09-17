
Feature: verification

  Scenario: Verify sign in
    Given Navigate to the SignInPage
    When Enter username "user.test.cabinet+myunisoft_candidat@myunisoft.fr" and password "G00D_LuCk" on SignInPage
    And Set checkboxes on SignInPage
    And Click submit button on SignInPage
    Then The user avatar is displayed on the home page
    And The week dashboard is displayed on the home page
    And The left menu items are displayed on the home page
    And Store the access token


  Scenario: Changing the User's Password
    Given The user has an access token
    When The user sends a request to change the password from old_password "G00D_LuCk" to new_password "G00D_LuCk1"


  Scenario: Changing the User's Password back
    Given The user has an access token
    When The user sends a request to change the password from old_password "G00D_LuCk1" to new_password "G00D_LuCk"
