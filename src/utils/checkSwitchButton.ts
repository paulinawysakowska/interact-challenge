import { Locator } from '@playwright/test';

export async function isSwitchButtonChecked(
    switchLocator: Locator
): Promise<boolean> {
    return await switchLocator.isChecked();
}
