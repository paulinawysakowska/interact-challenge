import { Page, expect } from '@playwright/test';

export async function verifyUrl(
    page: Page,
    urlPart: string,
    shouldContain = true,
    timeout = 3000,
    retries = 10
) {
    for (let i = 0; i < retries; i++) {
        try {
            if (shouldContain) {
                await expect(page).toHaveURL(new RegExp(urlPart), {
                    timeout: timeout,
                });
            } else {
                await expect(page).not.toHaveURL(new RegExp(urlPart), {
                    timeout: timeout,
                });
            }
            break;
        } catch (error) {
            if (i === retries - 1) {
                throw error;
            }
            await page.waitForTimeout(1000);
        }
    }
}
