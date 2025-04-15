import { Page, Locator } from '@playwright/test';

import { getUserDrawerLocators } from '@dicts';

export class UserDrawer {
    readonly page: Page;
    readonly logOffButton: Locator;
    readonly addBlogPostButton: Locator;

    constructor(page: Page) {
        this.page = page;

        const { logOffButton, addBlogPostButton } = getUserDrawerLocators(page);

        this.logOffButton = logOffButton;
        this.addBlogPostButton = addBlogPostButton;
    }

    async isLogOffButtonVisible(): Promise<boolean> {
        return await this.logOffButton.isVisible();
    }

    async clickAddBlogPostButton(): Promise<void> {
        await this.addBlogPostButton.click();
    }
}
