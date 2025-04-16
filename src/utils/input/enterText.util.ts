import { Locator } from '@playwright/test';

import { technicalLogs } from '@dicts';

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
