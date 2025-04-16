import { expect, Page } from '@playwright/test';

import {
    getPublishPostDrawerLocators,
    publishPostDrawerCopy,
    publishPostDrawerLogs,
} from '@dicts';
import { PublishPostDrawerLocators } from '@types';
import { checkIfTextVisible, isSwitchButtonChecked } from '@utils';

export class PublishPostDrawer {
    readonly page: Page;
    readonly locators: PublishPostDrawerLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = getPublishPostDrawerLocators(page);
    }

    async verifyTextsAreVisible(): Promise<void> {
        const textsToCheck = Object.values(publishPostDrawerCopy);

        for (const text of textsToCheck) {
            const isVisible = await checkIfTextVisible(this.page, text);
            if (!isVisible) {
                console.error(publishPostDrawerLogs.textNotVisible(text));
            }
            expect(isVisible).toBe(true);
        }
    }

    async verifySwitchButtonIsUnchecked(): Promise<boolean> {
        const isChecked = await isSwitchButtonChecked(
            this.locators.switchButton
        );
        if (isChecked) {
            console.error(publishPostDrawerLogs.switchShouldBeUnchecked);
        }
        return !isChecked;
    }

    async verifySwitchButtonIsChecked(): Promise<boolean> {
        const isChecked = await isSwitchButtonChecked(
            this.locators.switchButton
        );
        if (!isChecked) {
            console.error(publishPostDrawerLogs.switchShouldBeChecked);
        }
        return isChecked;
    }

    async clickSwitchButton(): Promise<void> {
        await this.locators.switchButton.click();
    }

    async clickSaveButton(): Promise<void> {
        await this.locators.saveButton.click();
    }
}
