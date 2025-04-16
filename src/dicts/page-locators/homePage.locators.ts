import { Page } from '@playwright/test';

import { homePageElements } from '@dicts';
import { HomePageLocators } from '@types';

export const getHomePageLocators = (page: Page): HomePageLocators => {
    const { elementNames } = homePageElements;

    return {
        avatarButton: page.getByRole('button', {
            name: elementNames.avatarButton,
        }),
    };
};
