import { Page, expect } from '@playwright/test';

import {
    loginPageLabelChecks,
    loginPagePlaceholderChecks,
} from '@assertion-data';
import { getLoginPageLocators, loginPageTexts } from '@dicts';
import { LoginPageLocators } from '@types';
import {
    checkPlaceholder,
    checkHiddenLabelText,
    checkTextContent,
    enterText,
    checkFieldIsFilled,
} from '@utils';

export class LoginPage {
    readonly page: Page;
    readonly locators: LoginPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = getLoginPageLocators(page);
    }

    async goToMainPage(): Promise<void> {
        await this.page.goto(process.env.URL || '');
    }

    async isLogoVisible(): Promise<void> {
        const isVisible = await this.locators.logoImage.isVisible();
        expect(isVisible).toBe(true);
    }

    async checkLoginPagePlaceholders(): Promise<void> {
        const placeholderChecks = loginPagePlaceholderChecks(this.page);

        for (const check of placeholderChecks) {
            await checkPlaceholder(check.element, check.expectedText);
        }
    }

    async checkLoginPageLabels(): Promise<void> {
        for (const check of loginPageLabelChecks) {
            await checkHiddenLabelText(
                this.page,
                check.forAttribute,
                check.expectedText
            );
        }
    }

    async checkLoginButtonText(): Promise<void> {
        const expectedText = loginPageTexts.loginButton;
        await checkTextContent(this.locators.loginButton, expectedText);
    }

    async enterUsername(): Promise<void> {
        const username = process.env.LOGIN;
        await enterText(this.locators.usernameInput, username);
    }

    async enterPassword(): Promise<void> {
        const password = process.env.PASSWORD;
        await enterText(this.locators.passwordInput, password);
    }

    async checkFieldsAreFilled(): Promise<void> {
        const fieldsToCheck = [
            this.locators.usernameInput,
            this.locators.passwordInput,
        ];

        for (const field of fieldsToCheck) {
            const isFilled = await checkFieldIsFilled(field);
            expect(isFilled).toBe(true);
        }
    }

    async clickLoginButton(): Promise<void> {
        await this.locators.loginButton.click();
    }
}
