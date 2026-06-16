
import { POManager } from '../pageobjects/POManager'
import { customtest as test, expect } from '../fixtures/testfixture';

test('login', async ({ page, testdataForregistration }) => {
    const poManager = new POManager(page)
    const homepage = poManager.getHomePage()
    await homepage.goTo()

    const loginPage = poManager.getLoginPage()

    await loginPage.clickOnLoginButton(
        testdataForregistration.username,
        testdataForregistration.password,
    )
    await page.waitForTimeout(2000)
})