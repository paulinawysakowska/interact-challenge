import { Page, Locator } from '@playwright/test';

import { homePageDict } from '@dicts';
import { verifyUrl } from '@utils';

export class HomePage {
    readonly page: Page;
    readonly avatarButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.avatarButton = page.getByRole('button', {
            name: 'Your profile and settings QA',
        });
    }

    async verifyHomeUrl(): Promise<void> {
        await verifyUrl(this.page, homePageDict.urlTxt, true);
    }

    async clickAvatarButton(): Promise<void> {
        await this.avatarButton.click();
    }
}
