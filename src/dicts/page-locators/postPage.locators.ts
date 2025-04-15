import { Page, Locator } from '@playwright/test';

export const getPostPageLocators = (
    page: Page
): {
    postTitle: Locator;
    postContent: Locator;
} => {
    return {
        postTitle: page.locator('h1'),
        postContent: page.locator('section.section.content.is-primary > p'),
    };
};
