import { POManager } from '../pageobjects/POManager'
import { customtest as test, expect } from '../fixtures/testfixture'

test.describe.serial('testNew',()=>
{
test('@smokeregistration', async ({ page, testdataForregistration }) => {
    const poManager = new POManager(page)
    const homepage = poManager.getHomePage()
    homepage.goTo()
    homepage.clickOnRegisterLink()

    const registerpage = poManager.getRegistrationPage()
    // const registerpage = new RegistrationPage(page)
    await registerpage.registerUser(
        testdataForregistration.firstname,
        testdataForregistration.lastname,
        testdataForregistration.address,
        testdataForregistration.city,
        testdataForregistration.state,
        testdataForregistration.zipcode,
        testdataForregistration.phonenumber,
        testdataForregistration.ssn,
        testdataForregistration.username,
        testdataForregistration.password,
        testdataForregistration.confirmpassword

    )
    registerpage.clickOnRegisterbutton()
    await page.waitForURL('https://parabank.parasoft.com/parabank/register.htm')
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
    await page.waitForTimeout(2000)
})

test('@smoke@regressionlogin', async ({ page, testdataForregistration }) => {
    const poManager = new POManager(page)
    const homepage = poManager.getHomePage()
    homepage.goTo()
  
     const loginpage=poManager.getLoginPage()
      await loginpage.clickOnLoginButton(
        testdataForregistration.username,
        testdataForregistration.password
      )

    // await page.waitForURL('https://parabank.parasoft.com/parabank/register.htm')
    // await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
    await page.waitForTimeout(2000)
})

})
