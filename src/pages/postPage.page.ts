import { Page, Locator, expect } from '@playwright/test';
import { verifyUrl } from '../utils/verifyUrlContains';
import { postPageDict } from '../dicts/postPageDict';

export class PostPage {
    readonly page: Page;
    readonly postTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.postTitle = page.locator('h1'); 
    }

    async verifyPostPageUrl(): Promise<void> {
        await verifyUrl(this.page, postPageDict.urlTxt, false);
    }

    async werifyPublishedPostTitle(randomTitle: string): Promise<void> {
        await this.page.waitForSelector('h1', { timeout: 50000 });

        await expect(this.postTitle).toHaveText(randomTitle, { timeout: 50000 });
    }
}
