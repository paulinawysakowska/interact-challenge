import { Page, Locator, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import { checkPlaceholder } from '../utils/checkPlaceholder';
import { loginPageDict } from '../dicts/loginPageDict';
import { checkHiddenLabelText } from '../utils/checkHiddenLabelText';
import { checkTextContent } from '../utils/checkTextContent';
import { enterText } from '../utils/enterText';
import { checkFieldIsFilled } from '../utils/checkFieldIsFilled';

dotenv.config();

export class LoginPage {
    readonly page: Page;
    readonly logoImage: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoImage = page.getByRole('img', { name: 'logo' });
        this.usernameInput = page.locator('#Username');
        this.passwordInput = page.locator('#Password');
        this.loginButton = page.locator('#loginbtn');
    }

    async goToMainPage() {
        await this.page.goto(process.env.URL || '');
    }

    async isLogoVisible(): Promise<boolean> {
        return await this.logoImage.isVisible();
    }

    async checkLoginPagePlaceholders() {
        const placeholderChecks = [
            {
                element: this.usernameInput,
                expectedText: loginPageDict.usernamePlaceholderTxt,
            },
            {
                element: this.passwordInput,
                expectedText: loginPageDict.passwordPlaceholderTxt,
            },
        ];

        for (const check of placeholderChecks) {
            await checkPlaceholder(check.element, check.expectedText);
        }
    }

    async checkLoginPageLabels() {
        const labelChecks = [
            {
                forAttribute: 'Username',
                expectedText: loginPageDict.labelsText.usernameLabel,
            },
            {
                forAttribute: 'Password',
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
        const expectedText = loginPageDict.loginButtonTxt;
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
