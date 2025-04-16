import { Page } from '@playwright/test';

/**
 * Checks whether a given text is visible anywhere on the page.
 *
 * Uses Playwright's text selector to locate the element containing the text.
 *
 * @param page - Playwright Page instance
 * @param text - The exact text to check for visibility
 * @returns boolean indicating whether the text is visible on the page
 */

export async function checkIfTextVisible(
    page: Page,
    text: string
): Promise<boolean> {
    const locator = page.locator(`text=${text}`);

    return await locator.isVisible();
}
