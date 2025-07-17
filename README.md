# SauceDemo Cypress Tests

This project contains end-to-end tests for [saucedemo.com](https://www.saucedemo.com/) using [Cypress](https://www.cypress.io/).

## Getting Started

1. **Clone the repository:**

    ```sh
    git clone git remote add origin https://github.com/Muyundo/saucedemoAutomation.git
    cd saucedemo
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Run the tests:**

    - Open Cypress Test Runner:

        ```sh
        npx cypress open
        ```

    - Or run tests in headless mode:

        ```sh
        npx cypress run
        ```

## Project Structure

- `cypress/e2e/` - Test specifications (e.g., `login.cy.js`)
- `cypress/fixtures/` - Test data and fixtures
- `cypress/support/` - Custom commands and global configuration
- `cypress.config.js` - Cypress configuration file
- `package.json` - Project dependencies

## Example Test

The `login.cy.js` file contains tests for logging in with valid and invalid
