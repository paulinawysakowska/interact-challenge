import { Locator } from '@playwright/test';

export type LoginPageLocators = {
    logoImage: Locator;
    usernameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
};
