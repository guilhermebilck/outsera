const BASE_URL = 'https://www.demoblaze.com/';
const username = 'bilck';
const password = 'teste';

export default {

  visitURL() {
    cy.visit(BASE_URL);
  },

  signUp() {
    cy.get('#login2').click()
    cy.get('#loginusername').click().type(username)
    cy.get('#loginpassword').click().clear().type(password);
    cy.contains('button', 'Log in').click();
  },

  confirmSignUp() {
    cy.get('#logout2')
    cy.contains("Welcome bilck")
    cy.contains("Log out")
  },

  visitMyCart() {
    cy.visit(`${BASE_URL}cart.html`);
    cy.contains("Products")
    cy.contains("Total")
  }

}
