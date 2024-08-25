import { Locator, expect } from '@playwright/test';

export async function checkIfElementVisible(elementLocator: Locator): Promise<void> {
    const isVisible = await elementLocator.isVisible();
    expect(isVisible).toBe(true);
}