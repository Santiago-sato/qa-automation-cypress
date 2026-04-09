describe('Login Test', () => {

    const usernameInput = '#username'
    const passwordInput = '#password'
    const submitButton = '#submit'

    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    it('Debe iniciar sesion correctamente', () => {

        cy.login('student', 'Password123')

        cy.url().should('include', 'logged-in-successfully/')

        cy.get('.wp-block-button__link').should('be.visible')

    })


    it('Debe mostar error si la contraseña es incorrecta', () => {

        cy.login('studenst', 'claveIncorrecta')

        cy.contains('Your password is invalid!')

    })

})




