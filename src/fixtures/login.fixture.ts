import { TestInfo } from '@playwright/test';

import { LoginFixtures } from '@types';
import { attachScreenshot, PageManager } from '@utils';

import { pageManagerTest as base } from './pageManager.fixture'; // bazujemy na rozszerzonym test

const screenshotLabel = 'log-in-fixture';

export const loginTest = base.extend<LoginFixtures>({
    pages: async ({ page }, use) => {
        const manager = new PageManager(page);
        await use(manager);
    },

    loginAsUser: async ({ pages }, use, testInfo: TestInfo) => {
        await pages.loginPage.goToMainPage();
        await attachScreenshot(testInfo, pages.rawPage, screenshotLabel);

        await pages.loginPage.isLogoVisible();

        await pages.loginPage.checkLoginPageLabels();
        await pages.loginPage.checkLoginPagePlaceholders();
        await pages.loginPage.checkLoginButtonText();
        await pages.loginPage.enterUsername();
        await pages.loginPage.enterPassword();
        await attachScreenshot(testInfo, pages.rawPage, screenshotLabel);

        await pages.loginPage.checkFieldsAreFilled();
        await pages.loginPage.clickLoginButton();
        await pages.homePage.verifyHomeUrl();

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        await use(async () => {});
    },
});
