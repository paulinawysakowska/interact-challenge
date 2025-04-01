import { Page, expect } from '@playwright/test';

export async function checkHiddenLabelText(
    page: Page,
    forAttribute: string,
    expectedText: string
): Promise<void> {
    const locator = page.locator(`label[for="${forAttribute}"]`);
    const textContent = await locator.textContent();
    const trimmedText = textContent?.trim();

    if (trimmedText !== expectedText) {
        console.error(
            `Error: Expected text "${expectedText}" but found "${trimmedText}" for label with 'for' attribute: ${forAttribute}`
        );
    }

    expect(trimmedText).toBe(expectedText);
}
