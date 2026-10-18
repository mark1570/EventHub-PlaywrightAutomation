// @ts-check
import { test, expect } from '@playwright/test';
test('Login Test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.locator('#username').fill("rahulshettly");
  await page.locator("[type='password']").fill("learning");
  await page.locator('#signInBtn').click();

});



