import { HomePage } from './HomePage'
import { RegistrationPage } from './RegistrationPage'
import { LoginPage } from './LoginPage'

export class POManager
     {
          constructor(page)
          {
            this.page =page
            this.homePage = new HomePage(this.page)
            this.registrationPage = new RegistrationPage(this.page)
            this.loginPage = new LoginPage(this.page)
          }
          getHomePage()
          {
            return this.homePage
          }
          getRegistrationPage()
          {
            return this.registrationPage
          }

          getLoginPage()

          {
            return this.loginPage
          }

    }