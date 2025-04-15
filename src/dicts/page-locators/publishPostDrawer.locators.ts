import { Page, Locator } from '@playwright/test';

export const getPublishPostDrawerLocators = (
    page: Page
): {
    switchButton: Locator;
    saveButton: Locator;
} => {
    return {
        switchButton: page.getByRole('dialog').locator('label'),
        saveButton: page.getByRole('link', { name: 'Save' }),
    };
};
