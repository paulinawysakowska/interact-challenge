import { Page, Locator } from '@playwright/test';

import { userDrawerElements } from '@dicts';

export const getUserDrawerLocators = (
    page: Page
): {
    logOffButton: Locator;
    addBlogPostButton: Locator;
} => {
    return {
        logOffButton: page.locator(
            `span:text("${userDrawerElements.buttonText.logOff}")`
        ),
        addBlogPostButton: page.locator(
            `ul[aria-labelledby="profile-filter-heading"] li a[href="${userDrawerElements.hrefs.addBlogPost}"]`
        ),
    };
};
