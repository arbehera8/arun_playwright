import { test, expect } from '@playwright/test';

test('Verify Registration Page Opens', async ({ page }) => {

    // Navigate to ParaBank home page
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // Click Register link
    await page.getByRole('link', { name: 'Register' }).click();

    // Verify Registration page is displayed
    await expect(page).toHaveURL(/register/);

    // Verify heading
    await expect(
        page.locator("//h1[contains(text(),'Signing up is easy!')]")
    ).toBeVisible();
});