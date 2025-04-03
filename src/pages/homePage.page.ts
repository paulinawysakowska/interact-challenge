import { Page, Locator } from '@playwright/test';

import { homePageElements } from '@dicts/page-elements/homePage.elements';
import { getHomePageLocators } from '@dicts/page-locators/homePage.locators';
import { verifyUrl } from '@utils';

export class HomePage {
    readonly page: Page;
    readonly avatarButton: Locator;

    constructor(page: Page) {
        this.page = page;

        const { avatarButton } = getHomePageLocators(page);
        this.avatarButton = avatarButton;
    }

    async verifyHomeUrl(): Promise<void> {
        await verifyUrl(this.page, homePageElements.urlTxt, true);
    }

    async clickAvatarButton(): Promise<void> {
        await this.avatarButton.click();
    }
}

// add verify texts on the page
//getByRole('link', { name: 'Interact logo' })
