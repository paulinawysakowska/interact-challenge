import { Page } from '@playwright/test';

import { getUserDrawerLocators } from '@dicts';
import { UserDrawerLocators } from '@types';

export class UserDrawer {
    readonly page: Page;
    readonly locators: UserDrawerLocators;

    constructor(page: Page) {
        this.page = page;

        this.locators = getUserDrawerLocators(page);
    }

    async isLogOffButtonVisible(): Promise<boolean> {
        return await this.locators.logOffButton.isVisible();
    }

    async clickAddBlogPostButton(): Promise<void> {
        await this.locators.addBlogPostButton.click();
    }
}
