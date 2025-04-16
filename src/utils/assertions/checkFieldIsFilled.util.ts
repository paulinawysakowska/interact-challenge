import { Locator } from '@playwright/test';

import { validationLogs } from '@dicts';

export async function checkFieldIsFilled(locator: Locator): Promise<boolean> {
    const value = await locator.inputValue();
    const isFilled = value.trim().length > 0;

    if (!isFilled) {
        console.error(validationLogs.fieldNotFilled(locator.toString()));
    }

    return isFilled;
}
