import { Locator } from '@playwright/test';

import { technicalLogs } from '@dicts';

/**
 * Enters text into a given input field using `.fill()`, unless the provided text is undefined.
 *
 * Logs an error and skips typing if no text is provided.
 *
 * @param locator - Playwright Locator pointing to the input field
 * @param text - The text to be entered; if undefined, nothing is typed
 */

export async function enterText(
    locator: Locator,
    text: string | undefined
): Promise<void> {
    if (!text) {
        console.error(technicalLogs.missingInputText);

        return;
    }

    await locator.fill(text);
}
