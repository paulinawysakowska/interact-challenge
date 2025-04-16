import { Page, expect } from '@playwright/test';

import { technicalLogs } from '@dicts';

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
