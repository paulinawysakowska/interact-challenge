import { Page, Locator, expect } from '@playwright/test';

import { postPageDict } from '../dicts/postPageDict';
import { verifyUrl } from '../utils/assertions/verifyUrlContains.util';

export class PostPage {
    readonly page: Page;
    readonly postTitle: Locator;
    readonly postContent: Locator;

    constructor(page: Page) {
        this.page = page;
        this.postTitle = page.locator('h1');
        this.postContent = page.locator(
            'section.section.content.is-primary > p'
        );
    }

    async verifyPostPageUrl(): Promise<void> {
        await verifyUrl(this.page, postPageDict.urlTxt, false);
    }

    async verifyPublishedPostTitle(randomTitle: string): Promise<void> {
        await expect(this.postTitle).toHaveText(randomTitle, {
            timeout: 50000,
        });
    }

    async verifyPublishedPostContent(randomContent: string): Promise<void> {
        await expect(this.postContent).toHaveText(randomContent, {
            timeout: 50000,
        });
    }
}
