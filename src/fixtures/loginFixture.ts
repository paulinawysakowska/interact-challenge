import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/homePage.page';
import { attachScreenshot } from '../utils/attachScreenshot';

const screenshotLabel = 'log-in-fixture';

type Fixtures = {
    loginAsUser: () => Promise<void>;
};

export const test = baseTest.extend<Fixtures>({
    loginAsUser: async ({ page }, use, testInfo) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);

        await loginPage.goToMainPage();
        await attachScreenshot(testInfo, page, screenshotLabel);

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

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        await use(async () => {});
    },
});
