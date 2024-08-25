import { expect, Locator, Page } from '@playwright/test';
import { publishPostDrawerDict } from '../dicts/publishPostDrawerDict';
import { checkIfTextVisible } from '../utils/checkIfTextVisible';
import { isSwitchButtonChecked } from '../utils/checkSwitchButton';

export class PublishPostDrawer {
    readonly page: Page;
    readonly switchButton: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.switchButton = page.getByRole('dialog').locator('label');
        this.saveButton = page.getByRole('link', { name: 'Save' });
    }

    async verifyTextsAreVisible(): Promise<void> {
        const textsToCheck = Object.values(publishPostDrawerDict);

        for (const text of textsToCheck) {
            const isVisible = await checkIfTextVisible(this.page, text);
            if (!isVisible) {
                console.error(`Text "${text}" is not visible on the page.`);
            }
            expect(isVisible).toBe(true);
        }
    }

    async verifySwitchButtonIsUnchecked(): Promise<boolean> {
        const isChecked = await isSwitchButtonChecked(this.switchButton);
        if (isChecked) {
            console.error(
                'Switch button is checked, but it should be unchecked.'
            );
        }
        return !isChecked;
    }

    async verifySwitchButtonIsChecked(): Promise<boolean> {
        const isChecked = await isSwitchButtonChecked(this.switchButton);
        if (!isChecked) {
            console.error(
                'Switch button is unchecked, but it should be checked.'
            );
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
