/// < reference types="cypress" />
describe('Login Page', () => {
it('access and log in with valid credentials', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.url().should('include', 'saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', 'inventory.html')

})

it('access and log in with invalid credentials', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.url().should('include', 'saucedemo.com')
    cy.get('#user-name').type('invalid_user')
    cy.get('#password').type('invalid_password')
    cy.get('#login-button').click()
    cy.get('.error-message-container').should('be.visible')
    cy.get('.error-message-container').should('contain', 'Epic sadface: Username and password do not match any user in this service')
})


})
