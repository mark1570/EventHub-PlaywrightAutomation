
import { test, expect } from '../../fixtures/basefixture.js';

test('EventHub login page opens', async ({ loginPage, page }) => {
  await loginPage.open();

  await expect(page).toHaveURL(/\/login/);
  await expect(loginPage.emailInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();

  await loginPage.login('markandey.pandey19@gmail.com'
, 'Mark@123');
  
  // Verify successful login by checking the URL or any other element on the dashboard page
  await expect(page).toHaveURL('https://eventhub.rahulshettyacademy/');


});
