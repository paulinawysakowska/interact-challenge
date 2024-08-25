import { Page } from '@playwright/test';

export async function checkIfTextVisible(
    page: Page,
    text: string
): Promise<boolean> {
    const locator = page.locator(`text=${text}`);

    return await locator.isVisible();
}
