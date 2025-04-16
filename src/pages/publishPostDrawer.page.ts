import { expect, Page } from '@playwright/test';

import {
    getPublishPostDrawerLocators,
    interactionLogs,
    publishPostDrawerTexts,
    validationLogs,
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
        const textsToCheck = Object.values(publishPostDrawerTexts);

        for (const text of textsToCheck) {
            const isVisible = await checkIfTextVisible(this.page, text);
            if (!isVisible) {
                console.error(validationLogs.textNotVisible(text));
            }
            expect(isVisible).toBe(true);
        }
    }

    async verifySwitchButtonIsUnchecked(): Promise<boolean> {
        const isChecked = await isSwitchButtonChecked(
            this.locators.switchButton
        );
        if (isChecked) {
            console.error(interactionLogs.switchShouldBeUnchecked);
        }
        return !isChecked;
    }

    async verifySwitchButtonIsChecked(): Promise<boolean> {
        const isChecked = await isSwitchButtonChecked(
            this.locators.switchButton
        );
        if (!isChecked) {
            console.error(interactionLogs.switchShouldBeChecked);
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
