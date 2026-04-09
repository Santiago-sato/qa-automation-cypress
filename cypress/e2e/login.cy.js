import LoginPage from '../pages/LoginPage'
import loginData from '../fixtures/loginData.json'


const loginPage = new LoginPage()

describe('Login Test', () => {

    beforeEach(() => {
        loginPage.visit()
    })

    it('Debe iniciar sesión correctamente', () => {

        loginPage.enterUsername(loginData.validUser.username)
        loginPage.enterPassword(loginData.validUser.password)
        loginPage.clickSubmit()

        cy.url().should('include', '/logged-in-successfully/')

    })




    it('Debe mostar error si la contraseña es incorrecta', () => {

        loginPage.enterUsername(loginData.invalidUser.username)
        loginPage.enterPassword(loginData.invalidUser.password)
        loginPage.clickSubmit()

        cy.contains('Your password is invalid!')

    })

})












