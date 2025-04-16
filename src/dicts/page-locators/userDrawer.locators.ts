import { Page } from '@playwright/test';

import { userDrawerElements } from '@dicts';
import { UserDrawerLocators } from '@types';

export const getUserDrawerLocators = (page: Page): UserDrawerLocators => {
    return {
        logOffButton: page.locator(
            `span:text("${userDrawerElements.buttonText.logOff}")`
        ),
        addBlogPostButton: page.locator(
            `ul[aria-labelledby="profile-filter-heading"] li a[href="${userDrawerElements.hrefs.addBlogPost}"]`
        ),
    };
};
