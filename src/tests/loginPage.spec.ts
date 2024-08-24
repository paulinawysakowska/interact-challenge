import { test, expect } from '@playwright/test';
import { LoginPage } from '../actions/login.page';

test('should check if logo is visible', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goToMainPage();

  const isLogoVisible = await loginPage.isLogoVisible();
  expect(isLogoVisible).toBe(true);

  await loginPage.checkLoginPageLabels();

  await loginPage.checkLoginPagePlaceholders();

  await loginPage.checkLoginButtonText();

  await loginPage.enterUsername();

  await loginPage.enterPassword();

  await loginPage.clickLoginButton();



});