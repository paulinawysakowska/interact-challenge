import { Locator, expect } from '@playwright/test';

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
