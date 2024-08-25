import { Locator, expect } from '@playwright/test';

export async function checkPlaceholder(
    element: Locator,
    expectedPlaceholder: string
) {
    const placeholder = await element.getAttribute('placeholder');

    if (placeholder !== expectedPlaceholder) {
        console.error(
            `Error: Expected placeholder "${expectedPlaceholder}" but found "${placeholder}" for element: ${element}`
        );
    }

    expect(placeholder).toBe(expectedPlaceholder);
}
