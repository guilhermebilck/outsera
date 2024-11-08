Feature: Demo Blaze Site Test
  As a user
  I want to navigate through the Demo Blaze Site
  So that I can validate the functionality of the site

  Scenario: Successful Login and Navigation
    Given I am on the Demo Blaze Site home page
    When I log in with valid credentials
    Then I confirm that I am logged in
    And I navigate to my cart

  Scenario: Simple Checkout Process
    Given I am on the Demo Blaze Site home page
    And I log in with valid credentials
    And I confirm that I am logged in
    When I add products to my cart
    And I navigate to my cart
    And I confirm the products and value
    And I fill in payment details
    Then I complete the purchase
