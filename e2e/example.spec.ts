import { expect, test } from '@playwright/test';

test('fills out the form and submits it', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Name').fill('Billy');
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add Task' }).click();
  await page.waitForTimeout(2000);

  await expect(page.getByText('Billy')).toBeVisible();
});
