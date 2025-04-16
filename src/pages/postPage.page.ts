import { Page, expect } from '@playwright/test';

import { getPostPageLocators, postPageElements } from '@dicts';
import { PostPageLocators } from '@types';
import { verifyUrl } from '@utils';

export class PostPage {
    readonly page: Page;
    readonly locators: PostPageLocators;

    private readonly defaultTimeout = 50000;

    constructor(page: Page) {
        this.page = page;
        this.locators = getPostPageLocators(page);
    }

    async verifyPostPageUrl(): Promise<void> {
        await verifyUrl(this.page, postPageElements.urlTxt, false);
    }

    async verifyPublishedPostTitle(randomTitle: string): Promise<void> {
        await expect(this.locators.postTitle).toHaveText(randomTitle, {
            timeout: this.defaultTimeout,
        });
    }

    async verifyPublishedPostContent(randomContent: string): Promise<void> {
        await expect(this.locators.postContent).toHaveText(randomContent, {
            timeout: this.defaultTimeout,
        });
    }
}
