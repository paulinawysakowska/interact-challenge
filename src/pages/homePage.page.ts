import { Page, Locator } from '@playwright/test';

import { homePageDict } from '@dicts';
import { verifyUrl } from '@utils';

export class HomePage {
    readonly page: Page;
    readonly avatarButton: Locator;

    constructor(page: Page) {
        this.page = page;

        const { elementNames } = homePageDict;

        this.avatarButton = page.getByRole('button', {
            name: elementNames.avatarButton,
        });
    }

    async verifyHomeUrl(): Promise<void> {
        await verifyUrl(this.page, homePageDict.urlTxt, true);
    }

    async clickAvatarButton(): Promise<void> {
        await this.avatarButton.click();
    }
}
