import { Locator, expect } from '@playwright/test';

import { validationLogs } from '@dicts';

export async function checkPlaceholder(
    element: Locator,
    expectedPlaceholder: string
): Promise<void> {
    const placeholder = await element.getAttribute('placeholder');

    if (placeholder !== expectedPlaceholder) {
        console.error(
            validationLogs.unexpectedPlaceholder(
                expectedPlaceholder,
                placeholder,
                element.toString()
            )
        );
    }

    expect(placeholder).toBe(expectedPlaceholder);
}
