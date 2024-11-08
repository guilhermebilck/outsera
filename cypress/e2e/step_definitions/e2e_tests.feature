Feature: Demo Blaze Site Test
  As a user
  I want to navigate through the Demo Blaze Site
  So that I can validate the functionality of the site

Scenario: Successful Login and Navigation
  Given I am on the Demo Blaze Site home page
  When I log in with valid credentials
  Then I confirm that I am logged in
  And I navigate to my cart
