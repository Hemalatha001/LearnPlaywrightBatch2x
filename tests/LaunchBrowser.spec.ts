/*
Sales Force Application Testing
Username : dilipkumar.rajendran@testleaf.com
Password : TestLeaf@2025
*/

import { test, expect } from '@playwright/test';

test.beforeEach('Luanch SalesforceApp', async ({ page }) => {
    await page.goto('https://login.salesforce.com/');
});

test('Validate Page Title', async ({ page }) => {
    await expect(page).toHaveTitle('Login | Salesforce');
});

test('Login Salesforce App', async ({ page }) => {

    await page.getByRole('textbox', { name: 'Username' }).fill('dilipkumar.rajendran@testleaf.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('TestLeaf@2025');
    await page.locator('#Login');
    //await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveTitle('Home | Salesforce');
});