/// <reference types='cypress' />
describe('Test Suite - Login', () => {
    beforeEach('Acessar aplicação', () => {
        cy.visit('https://automationpratice.com.br/login')
    
    })

    it('Login com sucesso', () => {
        cy.get('#user').type('bruno@qazando.com.br')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()

        cy.get('#swal2-title').should('have.text', 'Login realizado')
        cy.url().should('include', 'my-account')
    })
    it('Login com email invalida', () => {
        cy.get('#user').type('bruno')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })
    it('Login com email vazio', () => {
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })
    it('Login com senha invalida', () => {
        cy.get('#user').type('bruno@qazando.com.br')
        cy.get('#password').type('123')
        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    })
    it('Login com senha vazia', () => {
        cy.get('#user').type('bruno@qazando.com.br')
        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    })
    it('Login com email e senha vazia', () => {
        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })
        
})