import { test, expect } from '@playwright/test';

test('Practice Playwright locators', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Username
    await page.getByPlaceholder('Username')
        .fill('standard_user');

    // Password
    await page.getByPlaceholder('Password') 
        .fill('secret_sauce');

    // Login button
    await page.getByRole('button', { name: 'Login' })
        .click();

    // Verify successful login
    await expect(page).toHaveURL(/inventory/);
});