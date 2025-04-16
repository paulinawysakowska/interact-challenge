import { Locator, expect } from '@playwright/test';

/**
 * Asserts that the given element is visible on the page.
 *
 * Fails the test if the element is not visible.
 *
 * @param elementLocator - Playwright Locator for the element being checked
 */

export async function checkIfElementVisible(
    elementLocator: Locator
): Promise<void> {
    const isVisible = await elementLocator.isVisible();
    expect(isVisible).toBe(true);
}
