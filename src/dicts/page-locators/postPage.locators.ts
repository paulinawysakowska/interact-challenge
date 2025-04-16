import { Page } from '@playwright/test';

import { PostPageLocators } from '@types';

export const getPostPageLocators = (page: Page): PostPageLocators => {
    return {
        postTitle: page.locator('h1'),
        postContent: page.locator('section.section.content.is-primary > p'),
    };
};
