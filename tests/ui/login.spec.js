import { test, expect } from '@playwright/test';

test('Event hub login page loads correctly', async ({ page }) => {
  await page.goto('/login');
  await expect(page).toHaveTitle('EventHub — Discover & Book Events');
});

