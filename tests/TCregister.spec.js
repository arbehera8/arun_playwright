
import { POManager } from '../pageobjects/POManager'
//import testdata from '../utils/parabank.json' assert {type: 'json'}
import { customtest as test, expect } from '../fixtures/testfixture'
// test('registration', async ({ page }) => {
//     const homepage = new HomePage(page)
//     homepage.goTo()
//     homepage.clickOnRegisterLink()
//     const registerpage = new RegistrationPage(page)
//     await registerpage.registerUser('ravi', 'peter', 'delhi', 'saket', 'delhi', '110011', '12234', '34345', 'javasc1113', 'asdf')
//     registerpage.clickOnRegisterbutton()
//     await page.waitForURL('https://parabank.parasoft.com/parabank/register.htm')
//     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
//     await page.waitForTimeout(2000)
// })

// for (const data of testdata) {
//     test(`registration ${data.username}`, async ({ page }) => {
//         const poManager = new POManager(page)
//         const homepage = poManager.getHomePage()
//         homepage.goTo()
//         homepage.clickOnRegisterLink()

//         const registerpage = poManager.getRegistrationPage()
//         // const registerpage = new RegistrationPage(page)
//         await registerpage.registerUser(
//             data.firstname,
//             data.lastname,
//             data.address,
//             data.city,
//             data.state,
//             data.zipcode,
//             data.phonenumber,
//             data.ssn,
//             data.username,
//             data.password,
//             data.confirmpassword

//         )
//         registerpage.clickOnRegisterbutton()
//         await page.waitForURL('https://parabank.parasoft.com/parabank/register.htm')
//         await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
//         await page.waitForTimeout(2000)
//     })
// }

test('registration', async ({ page, testdataForregistration }) => {
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