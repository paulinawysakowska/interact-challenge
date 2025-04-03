import { Page, Locator, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

import { loginPageDict } from '@dicts';
import {
    checkPlaceholder,
    checkHiddenLabelText,
    checkTextContent,
    enterText,
    checkFieldIsFilled,
} from '@utils';

dotenv.config();

export class LoginPage {
    readonly page: Page;
    readonly logoImage: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;

        const { elementNames, selectors } = loginPageDict;

        this.logoImage = page.getByRole('img', {
            name: elementNames.logoImage,
        });
        this.usernameInput = page.locator(selectors.usernameInput);
        this.passwordInput = page.locator(selectors.passwordInput);
        this.loginButton = page.locator(selectors.loginButton);
    }

    async goToMainPage(): Promise<void> {
        await this.page.goto(process.env.URL || '');
    }

    async isLogoVisible(): Promise<void> {
        const isVisible = await this.logoImage.isVisible();
        expect(isVisible).toBe(true);
    }

    async checkLoginPagePlaceholders(): Promise<void> {
        const placeholderChecks = [
            {
                element: this.usernameInput,
                expectedText: loginPageDict.placeholders.username,
            },
            {
                element: this.passwordInput,
                expectedText: loginPageDict.placeholders.password,
            },
        ];

        for (const check of placeholderChecks) {
            await checkPlaceholder(check.element, check.expectedText);
        }
    }

    async checkLoginPageLabels(): Promise<void> {
        const labelChecks = [
            {
                forAttribute: loginPageDict.labelForAttributes.username,
                expectedText: loginPageDict.labelsText.usernameLabel,
            },
            {
                forAttribute: loginPageDict.labelForAttributes.password,
                expectedText: loginPageDict.labelsText.passwordLabel,
            },
        ];

        for (const check of labelChecks) {
            await checkHiddenLabelText(
                this.page,
                check.forAttribute,
                check.expectedText
            );
        }
    }

    async checkLoginButtonText(): Promise<void> {
        const expectedText = loginPageDict.loginButton;
        await checkTextContent(this.loginButton, expectedText);
    }

    async enterUsername(): Promise<void> {
        const username = process.env.LOGIN;
        await enterText(this.usernameInput, username);
    }

    async enterPassword(): Promise<void> {
        const password = process.env.PASSWORD;
        await enterText(this.passwordInput, password);
    }

    async checkFieldsAreFilled(): Promise<void> {
        const fieldsToCheck = [this.usernameInput, this.passwordInput];

        for (const field of fieldsToCheck) {
            const isFilled = await checkFieldIsFilled(field);
            expect(isFilled).toBe(true);
        }
    }

    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }
}
