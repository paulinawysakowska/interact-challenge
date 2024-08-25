import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { attachScreenshot } from '../utils/attachScreenshot';
import { HomePage } from '../pages/homePage.page';

const screenshotLabel = 'log-in-test';

test.beforeEach(async ({ page }, testInfo) => {
  const loginPage = new LoginPage(page);

  await loginPage.goToMainPage();
  await attachScreenshot(testInfo, page, screenshotLabel);


});


test('Login user', async ({ page }, testInfo) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  const isLogoVisible = await loginPage.isLogoVisible();
  expect(isLogoVisible).toBe(true);

  await loginPage.checkLoginPageLabels();

  await loginPage.checkLoginPagePlaceholders();

  await loginPage.checkLoginButtonText();

  await loginPage.enterUsername();

  await loginPage.enterPassword();

  await attachScreenshot(testInfo, page, screenshotLabel);

  await loginPage.checkFieldsAreFilled();

  await loginPage.clickLoginButton();

  await homePage.verifyHomeUrl();

  await homePage.clickAvatarButton();

});