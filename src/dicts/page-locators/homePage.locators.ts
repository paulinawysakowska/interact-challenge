import { Page, Locator } from '@playwright/test';

import { homePageElements } from '@dicts/page-elements/homePage.elements';

export const getHomePageLocators = (
    page: Page
): {
    avatarButton: Locator;
} => {
    const { elementNames } = homePageElements;

    return {
        avatarButton: page.getByRole('button', {
            name: elementNames.avatarButton,
        }),
    };
};
