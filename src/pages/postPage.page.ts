import { Page, Locator, expect } from '@playwright/test';

import { getPostPageLocators, postPageElements } from '@dicts';
import { verifyUrl } from '@utils';

export class PostPage {
    readonly page: Page;
    readonly postTitle: Locator;
    readonly postContent: Locator;
    private readonly defaultTimeout = 50000;

    constructor(page: Page) {
        this.page = page;

        const { postTitle, postContent } = getPostPageLocators(page);

        this.postTitle = postTitle;
        this.postContent = postContent;
    }

    async verifyPostPageUrl(): Promise<void> {
        await verifyUrl(this.page, postPageElements.urlTxt, false);
    }

    async verifyPublishedPostTitle(randomTitle: string): Promise<void> {
        await expect(this.postTitle).toHaveText(randomTitle, {
            timeout: this.defaultTimeout,
        });
    }

    async verifyPublishedPostContent(randomContent: string): Promise<void> {
        await expect(this.postContent).toHaveText(randomContent, {
            timeout: this.defaultTimeout,
        });
    }
}
