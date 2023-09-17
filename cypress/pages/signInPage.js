export class SignInPage {
  constructor() {
    this.utilisateur = "user.test.cabinet+myunisoft_candidat@myunisoft.fr";
    this.pass = "G00D_LuCk";
    this.passUpdated = "G00D_LuCk1";
    this.url = "https://app.myunisoft.fr";
  }

  // Locators
  get mailLocator() { return 'input#mail'; }
  get passLocator() { return 'input#password'; }
  get submitLocator() { return "button[type='submit']"; }
  get cguLocator() { return "input[value='cgu']"; }
  get allowDataLocator() { return "input[value='allowData']"; }

  enterCredentials(username, password) {
    cy.get(this.mailLocator).click().type(username);
    cy.get(this.passLocator).click().type(password);
  }

  clickSubmit() {
    cy.get(this.submitLocator).click();
  }

  setCheckboxes() {
    cy.get(this.cguLocator).then(($cguCheckbox) => {
      if (!$cguCheckbox.prop('checked')) {
        $cguCheckbox.click();
      }
    });

    cy.get(this.allowDataLocator).then(($allowDataCheckbox) => {
      if (!$allowDataCheckbox.prop('checked')) {
        $allowDataCheckbox.click();
      }
    });
  }
}

export default new SignInPage();
