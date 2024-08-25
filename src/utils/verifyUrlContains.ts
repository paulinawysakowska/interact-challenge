import { Page, expect } from '@playwright/test';

export async function verifyUrlContains(
    page: Page,
    urlPart: string,
    timeout: number = 1000,
    retries: number = 3
) {
    for (let i = 0; i < retries; i++) {
        try {
            await expect(page).toHaveURL(new RegExp(urlPart), {
                timeout: timeout,
            });
            break;
        } catch (error) {
            if (i === retries - 1) {
                throw error;
            }
            await page.waitForTimeout(500);
        }
    }
}
