import { test } from '@playwright/test';

import { LoginPage, HomePage } from '@pages';
import { attachScreenshot } from '@utils';

const screenshotLabel = 'log-in-test';

test.beforeEach(async ({ page }, testInfo) => {
    const loginPage = new LoginPage(page);

    await loginPage.goToMainPage();
    await attachScreenshot(testInfo, page, screenshotLabel);
});

test('Login user', async ({ page }, testInfo) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.isLogoVisible();

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
