import { Locator, expect } from '@playwright/test';

export async function checkTextContent(locator: Locator, expectedText: string) {
    const actualText = await locator.textContent();

    if (actualText?.trim() !== expectedText) {
        console.error(`Error: Expected text "${expectedText}" but found "${actualText?.trim()}" for locator: ${locator}`);
    }

    await expect(locator).toHaveText(expectedText);
}
