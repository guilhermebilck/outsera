import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

import loginPage from '../page_objects/loginPage'

Given ("I'm on the login page", () => {
    loginPage.login();
})