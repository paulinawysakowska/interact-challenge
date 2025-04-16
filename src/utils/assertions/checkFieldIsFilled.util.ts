import { Locator } from '@playwright/test';

import { validationLogs } from '@dicts';

/**
 * Checks whether the given input field is filled (i.e., contains non-whitespace characters).
 *
 * Logs an error if the field is empty.
 *
 * @param locator - Playwright Locator pointing to the input element
 * @returns boolean indicating whether the field is filled
 */

export async function checkFieldIsFilled(locator: Locator): Promise<boolean> {
    const value = await locator.inputValue();
    const isFilled = value.trim().length > 0;

    if (!isFilled) {
        console.error(validationLogs.fieldNotFilled(locator.toString()));
    }

    return isFilled;
}
