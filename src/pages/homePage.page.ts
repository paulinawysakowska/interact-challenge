import { Page, Locator } from '@playwright/test';
import { verifyUrlContains } from '../utils/verifyUrlContains';
import { homePageDict } from '../dicts/homePageDict';


export class HomePage {
    readonly page: Page;
    readonly avatarButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.avatarButton = page.getByRole('button', { name: 'Your profile and settings QA' })
        
    }
    
    async verifyHomeUrl(): Promise<void> {
            await verifyUrlContains(this.page, homePageDict.urlTxt);
        }

    async clickAvatarButton(): Promise<void> {
            await this.avatarButton.click();
    }

    }
    