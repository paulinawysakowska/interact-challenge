import { Page } from '@playwright/test';

import { PublishPostDrawerLocators } from '@types';

export const getPublishPostDrawerLocators = (
    page: Page
): PublishPostDrawerLocators => {
    return {
        switchButton: page.getByRole('dialog').locator('label'),
        saveButton: page.getByRole('link', { name: 'Save' }),
    };
};
