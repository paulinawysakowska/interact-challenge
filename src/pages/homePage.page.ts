import { Page } from '@playwright/test';

import { getHomePageLocators, homePageElements } from '@dicts';
import { HomePageLocators } from '@types';
import { verifyUrl } from '@utils';

export class HomePage {
    readonly page: Page;
    readonly locators: HomePageLocators;

    constructor(page: Page) {
        this.page = page;

        this.locators = getHomePageLocators(page);
    }

    async verifyHomeUrl(): Promise<void> {
        await verifyUrl(this.page, homePageElements.urlTxt, true);
    }

    async clickAvatarButton(): Promise<void> {
        await this.locators.avatarButton.click();
    }
}

// TO DO: add verify texts on the page
//getByRole('link', { name: 'Interact logo' })
