import { Locator, expect } from '@playwright/test';

export async function checkIfElementNotVisible(elementLocator: Locator): Promise<void> {
    const isVisible = await elementLocator.isVisible();
    expect(isVisible).toBe(false); 
}