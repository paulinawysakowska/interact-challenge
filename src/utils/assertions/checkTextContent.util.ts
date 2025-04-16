import { Locator, expect } from '@playwright/test';

/**
 * Asserts that the given element contains the expected text content.
 *
 * Falls back to checking the `value` attribute if no visible text content is found.
 *
 * @param locator - Playwright Locator pointing to the target element
 * @param expectedText - The exact text expected in the element
 */

export async function checkTextContent(
    locator: Locator,
    expectedText: string
): Promise<void> {
    let actualText = await locator.textContent();

    if (!actualText?.trim()) {
        actualText = await locator.getAttribute('value');
    }

    const trimmedText = actualText?.trim();

    expect(trimmedText).toBe(expectedText);
}
