import { Page, expect } from '@playwright/test';

/**
 * Verifies that the current page URL matches (or does not match) the expected pattern.
 *
 * Retries the check up to `retries` times with a 1-second delay between attempts.
 *
 * @param page - The Playwright Page object
 * @param urlPart - The string or pattern expected to be present in the URL
 * @param shouldContain - Whether the URL should contain the pattern (default: true)
 * @param timeout - Timeout for each individual URL check (in ms, default: 3000)
 * @param retries - Number of retries before throwing an error (default: 10)
 */

export async function verifyUrl(
    page: Page,
    urlPart: string,
    shouldContain = true,
    timeout = 3000,
    retries = 10
): Promise<void> {
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
