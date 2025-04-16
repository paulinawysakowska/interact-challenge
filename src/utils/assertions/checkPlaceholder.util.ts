import { Locator, expect } from '@playwright/test';

import { validationLogs } from '@dicts';

/**
 * Verifies that a given element has the expected placeholder text.
 *
 * If the placeholder does not match, logs a detailed error with expected and actual values.
 *
 * @param element - Playwright Locator for the element to check
 * @param expectedPlaceholder - The placeholder text expected to be present
 */

export async function checkPlaceholder(
    element: Locator,
    expectedPlaceholder: string
): Promise<void> {
    const placeholder = await element.getAttribute('placeholder');

    if (placeholder !== expectedPlaceholder) {
        console.error(
            validationLogs.unexpectedPlaceholder(
                expectedPlaceholder,
                placeholder,
                element.toString()
            )
        );
    }

    expect(placeholder).toBe(expectedPlaceholder);
}
