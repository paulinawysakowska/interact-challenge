import { Page, Locator } from '@playwright/test';
import * as dotenv from 'dotenv';
import { checkPlaceholder } from '../utils/checkPlaceholder';
import { loginPageDict } from '../dicts/loginPageDict';
import { checkHiddenLabelText } from '../utils/checkHiddenLabelText';
import { checkTextContent } from '../utils/checkTextContent';
import { enterText } from '../utils/enterText';
// import { isTextVisible } from '../utils/isTextVisible';

dotenv.config();

export class LoginPage {
    readonly page: Page;
    readonly url: string = 'https://jamesroberts-trial.interactgo.com/';
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
        await checkPlaceholder(this.usernameInput, loginPageDict.usernamePlaceholderTxt);
        await checkPlaceholder(this.passwordInput, loginPageDict.passwordPlaceholderTxt);
    }

    async checkLoginPageLabels() {
        const labelChecks = [
            { forAttribute: 'Username', expectedText: loginPageDict.labelsText.usernameLabel },
            { forAttribute: 'Password', expectedText: loginPageDict.labelsText.passwordLabel },
        ];

        for (const check of labelChecks) {
            await checkHiddenLabelText(this.page, check.forAttribute, check.expectedText);
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

    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }


}