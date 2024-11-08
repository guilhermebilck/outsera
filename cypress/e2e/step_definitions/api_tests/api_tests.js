import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

Given('I send a GET request to {string}', (endpoint) => {
    cy.request({
        method: 'GET',
        url: `${BASE_URL}${endpoint}`,
        failOnStatusCode: false
    }).then((apiResponse) => {
        cy.wrap(apiResponse).as("response")
    });
});

When('the response status is OK', () => {
    cy.get('@response').its('status').should('eq', 200);
});

Then('the response body should contain {string} and {string} and {string}', (key1, key2, key3) => {
    cy.get('@response').then(response => {
        expect(response.body).to.have.property(key1);
        expect(response.body).to.have.property(key2);
        expect(response.body).to.have.property(key3);

        cy.log(response.body[key1], response.body[key2], response.body[key3])
    });

});
When('I send a {string} request to {string}', (method, endpoint) => {
    cy.request({
        method: method,
        url: `${BASE_URL}${endpoint}`,
        body: { title: 'Test Title', completed: false },
        failOnStatusCode: false
    }).then((apiResponse) => {
        cy.wrap(apiResponse).as("response")
    });

});

Then('the response status should be {string}', (status) => {
    cy.get("@response").then((firstResponse) => {
        expect(firstResponse.status).to.eq(parseInt(status))
    })
});

And('the response headers should contain {string} with value {string}', (headerKey, headerValue) => {
    cy.get("@response").then((firstResponse) => {
        console.log(firstResponse.headers)
        expect(firstResponse.headers).to.have.property(headerKey);
        expect(firstResponse.headers[headerKey]).to.include(headerValue);
    });
});

And('the response body should contain {string}', (response_body) => {
    cy.get("@response").then((firstResponse) => {
        if (response_body === "userId") {
            expect(firstResponse.body[1]).to.have.property(response_body);
        } else if (response_body === "{}") {
            expect(JSON.stringify(firstResponse.body)).to.eq("{}");
        } else {
            expect(firstResponse.body).to.have.property(response_body);
        }

    })
});
