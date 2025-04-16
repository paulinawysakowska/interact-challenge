import { Page, expect } from '@playwright/test';

import { technicalLogs } from '@dicts';

/**
 * Verifies that a hidden label with a given 'for' attribute contains the expected text.
 *
 * If the label text does not match, logs a detailed mismatch error using a technical log helper.
 *
 * @param page - Playwright Page instance
 * @param forAttribute - Value of the `for` attribute used to locate the <label> element
 * @param expectedText - Text expected to be found inside the label
 */

export async function checkHiddenLabelText(
    page: Page,
    forAttribute: string,
    expectedText: string
): Promise<void> {
    const locator = page.locator(`label[for="${forAttribute}"]`);
    const textContent = await locator.textContent();
    const trimmedText = textContent?.trim() ?? null;

    if (trimmedText !== expectedText) {
        console.error(
            technicalLogs.labelTextMismatch(
                expectedText,
                trimmedText,
                forAttribute
            )
        );
    }

    expect(trimmedText).toBe(expectedText);
}
