import { Page, TestInfo } from '@playwright/test';

/**
 * Captures a full-page screenshot and attaches it to the current test's report.
 *
 * Useful for debugging, reporting failures, or documenting steps.
 *
 * @param testInfo - Playwright's TestInfo object for the current test
 * @param page - Playwright Page instance from the test context
 * @param label - Label used to identify the screenshot attachment
 */

export async function attachScreenshot(
    testInfo: TestInfo,
    page: Page,
    label: string
): Promise<void> {
    await testInfo.attach(label, {
        body: await page.screenshot({ fullPage: true }),
        contentType: 'image/png',
    });
}
