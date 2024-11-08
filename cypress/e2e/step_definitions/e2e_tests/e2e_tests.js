import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginPage from '../page_objects/loginPage';
import checkoutPage from '../page_objects/checkoutPage';

Given('I am on the Demo Blaze Site home page', () => {
  loginPage.visitURL()
});

When('I log in with valid credentials', () => {
  loginPage.signUp()
});

Then('I confirm that I am logged in', () => {
  loginPage.confirmSignUp()
});

Then('I navigate to my cart', () => {
  loginPage.visitMyCart()
});

When('I add products to my cart', () => {
  checkoutPage.addToCart();
});

Then('I confirm the products and value', () => {
  checkoutPage.confirmCart();
});

And('I fill in payment details', () => {
  checkoutPage.fillPaymentDetails();
});

And('I complete the purchase', () => {
  checkoutPage.completePurchase();
});
