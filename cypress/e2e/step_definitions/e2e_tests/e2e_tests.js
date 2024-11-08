import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginPage from '../page_objects/loginPage';

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
