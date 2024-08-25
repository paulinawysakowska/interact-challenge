import { test as baseTest, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/homePage.page';
import { attachScreenshot } from '../utils/attachScreenshot';

type Fixtures = {
    loginAsUser: () => Promise<void>;
};

export const test = baseTest.extend<Fixtures>({
    loginAsUser: async ({ page }, use, testInfo) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);

        await loginPage.goToMainPage();
        await attachScreenshot(testInfo, page, 'before-login');

        const isLogoVisible = await loginPage.isLogoVisible();
        expect(isLogoVisible).toBe(true);

        await loginPage.checkLoginPageLabels();
        await loginPage.checkLoginPagePlaceholders();
        await loginPage.checkLoginButtonText();
        await loginPage.enterUsername();
        await loginPage.enterPassword();
        await attachScreenshot(testInfo, page, 'after-entering-credentials');

        await loginPage.checkFieldsAreFilled();
        await loginPage.clickLoginButton();
        await homePage.verifyHomeUrl();

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        await use(async () => {});
    },
});
