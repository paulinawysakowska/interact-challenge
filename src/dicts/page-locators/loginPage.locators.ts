import { Page } from '@playwright/test';

import { loginPageElements } from '@dicts';
import { LoginPageLocators } from '@types';

export const getLoginPageLocators = (page: Page): LoginPageLocators => {
    const { elementNames } = loginPageElements;

    return {
        logoImage: page.getByRole('img', { name: elementNames.logoImage }),
        usernameInput: page.locator('#Username'),
        passwordInput: page.locator('#Password'),
        loginButton: page.locator('#loginbtn'),
    };
};
