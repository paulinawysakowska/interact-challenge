import { Page, Locator } from '@playwright/test';

export class UserDrawer {
    readonly page: Page;
    readonly logOffButton: Locator;
    readonly addBlogPostButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logOffButton = page.locator('span:text("Log Off")');
        this.addBlogPostButton = page.locator(
            'ul[aria-labelledby="profile-filter-heading"] li a[href="/blog/post/create/345"]'
        );
    }

    async isLogOffButtonVisible(): Promise<boolean> {
        return await this.logOffButton.isVisible();
    }

    async clickAddBlogPostButton(): Promise<void> {
        await this.addBlogPostButton.click();
    }
}
