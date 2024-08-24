import { Locator, expect } from '@playwright/test';

export async function checkClickability(locator: Locator) {
    await expect(locator).toBeEnabled();
    try {
        await locator.click({ trial: true });
    } catch (e) {
        throw new Error(`Element is not clickable: ${e.message}`);
    }
}