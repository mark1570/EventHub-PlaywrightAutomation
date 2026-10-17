import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});


test.only("Screenshot and Visual compariosion", async({page}) => {
 await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
 await expect(page.locator("#displayed-text")).toBeVisible();
 await page.locator("#hide-textbox").click();
 await page.screenshot({path: 'screenshot.png'});
});