# features/api_tests.feature

Feature: API Tests
    As a tester
    I want to validate API responses
    So that I can ensure the API is working correctly

    Scenario: Get user details
        Given I send a GET request to "/users/1"
        When the response status is OK
        Then the response body should contain "name" and "email" and "phone"

    Scenario Outline: Test various HTTP methods
        Given I send a "<method>" request to "<endpoint>"
        Then the response status should be "<status>"
        And the response headers should contain "<header_key>" with value "<header_value>"
        And the response body should contain "<response_body>"
        Examples:
            | method | endpoint | status | header_key        | header_value                    | response_body |
            | GET    | /posts   | 200    | content-type      | application/json; charset=utf-8 | userId        |
            | POST   | /posts   | 201    | connection        | keep-alive                      | id            |
            | PUT    | /posts/1 | 200    | transfer-encoding | chunked                         | id            |
            | DELETE | /posts/1 | 200    | content-length    | 2                               | {}            |

    Scenario Outline: Test invalid endpoints
        Given I send a GET request to "<invalid_endpoint>"
        Then the response status should be "<status>"

        Examples:
            | invalid_endpoint | status |
            | /nonexistent     | 404    |
            | /accounts        | 404    |
