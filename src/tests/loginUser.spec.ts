import { pageManagerTest as test } from '@fixtures';
import { attachScreenshot } from '@utils';

const screenshotLabel = 'log-in-test';

test.beforeEach(async ({ pages, page }, testInfo) => {
    await pages.loginPage.goToMainPage();

    await attachScreenshot(testInfo, page, screenshotLabel);
});

test('Login user', async ({ pages, page }, testInfo) => {
    await pages.loginPage.isLogoVisible();
    await pages.loginPage.checkLoginPageLabels();
    await pages.loginPage.checkLoginPagePlaceholders();
    await pages.loginPage.checkLoginButtonText();
    await pages.loginPage.enterUsername();
    await pages.loginPage.enterPassword();

    await attachScreenshot(testInfo, page, screenshotLabel);

    await pages.loginPage.checkFieldsAreFilled();
    await pages.loginPage.clickLoginButton();
    await pages.homePage.verifyHomeUrl();
    await pages.homePage.clickAvatarButton();
});
