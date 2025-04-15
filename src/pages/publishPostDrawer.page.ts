import { expect, Locator, Page } from '@playwright/test';

import {
    getPublishPostDrawerLocators,
    publishPostDrawerCopy,
    publishPostDrawerLogs,
} from '@dicts';
import { checkIfTextVisible, isSwitchButtonChecked } from '@utils';

export class PublishPostDrawer {
    readonly page: Page;
    readonly switchButton: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        const { switchButton, saveButton } = getPublishPostDrawerLocators(page);

        this.switchButton = switchButton;
        this.saveButton = saveButton;
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
        const isChecked = await isSwitchButtonChecked(this.switchButton);
        if (isChecked) {
            console.error(publishPostDrawerLogs.switchShouldBeUnchecked);
        }
        return !isChecked;
    }

    async verifySwitchButtonIsChecked(): Promise<boolean> {
        const isChecked = await isSwitchButtonChecked(this.switchButton);
        if (!isChecked) {
            console.error(publishPostDrawerLogs.switchShouldBeChecked);
        }
        return isChecked;
    }

    async clickSwitchButton(): Promise<void> {
        await this.switchButton.click();
    }

    async clickSaveButton(): Promise<void> {
        await this.saveButton.click();
    }
}
