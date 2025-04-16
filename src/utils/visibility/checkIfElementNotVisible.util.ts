import { Locator, expect } from '@playwright/test';

/**
 * Asserts that the given element is not visible on the page.
 *
 * Fails the test if the element is visible.
 *
 * @param elementLocator - Playwright Locator for the element being checked
 */

export async function checkIfElementNotVisible(
    elementLocator: Locator
): Promise<void> {
    const isVisible = await elementLocator.isVisible();
    expect(isVisible).toBe(false);
}
