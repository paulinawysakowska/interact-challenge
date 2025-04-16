import { Locator } from '@playwright/test';

/**
 * Checks whether the given switch (checkbox/radio) element is currently selected.
 *
 * @param switchLocator - Playwright Locator pointing to the switch element
 * @returns boolean indicating whether the switch is checked
 */

export async function isSwitchButtonChecked(
    switchLocator: Locator
): Promise<boolean> {
    return await switchLocator.isChecked();
}
