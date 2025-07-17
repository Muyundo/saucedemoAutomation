# SauceDemo Cypress Tests

This project contains end-to-end tests for [saucedemo.com](https://www.saucedemo.com/) using [Cypress](https://www.cypress.io/).

## Project Structure

- `cypress/e2e/` - Test specifications (e.g., [login.cy.js](cypress/e2e/login.cy.js))
- `cypress/fixtures/` - Test data and fixtures (e.g., [example.json](cypress/fixtures/example.json))
- `cypress/support/` - Custom commands and global configuration ([commands.js](cypress/support/commands.js), [e2e.js](cypress/support/e2e.js))
- `cypress.config.js` - Cypress configuration file
- `package.json` - Project dependencies

## Setup

1. Install dependencies:

    ```sh
    npm install
    ```

2. Open Cypress Test Runner:

    ```sh
    npx cypress open
    ```

   Or run tests in headless mode:

    ```sh
    npx cypress run
    ```

## Example Test

The [login.cy.js](cypress/e2e/login.cy.js) file contains tests for logging in with valid and invalid credentials.

## Resources

- [Cypress Documentation](https://docs.cypress.io/)
-
