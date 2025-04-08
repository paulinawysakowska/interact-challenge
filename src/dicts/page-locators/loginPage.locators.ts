import { Page, Locator } from '@playwright/test';

import { loginPageElements } from '@dicts/page-elements/loginPage.elements';

export const getLoginPageLocators = (
    page: Page
): {
    logoImage: Locator;
    usernameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
} => {
    const { elementNames } = loginPageElements;

    return {
        logoImage: page.getByRole('img', { name: elementNames.logoImage }),
        usernameInput: page.locator('#Username'),
        passwordInput: page.locator('#Password'),
        loginButton: page.locator('#loginbtn'),
    };
};
