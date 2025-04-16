import { Locator } from '@playwright/test';

/**
 * Determines whether a text field is considered empty.
 *
 * A field is empty if:
 * - it has no text content,
 * - it contains only whitespace,
 * - or its content is equal to the placeholder.
 *
 * @param element - Playwright Locator pointing to the text field element
 * @returns boolean indicating whether the field is empty
 */

export async function checkTextFieldEmptyStatus(
    element: Locator
): Promise<boolean> {
    const textContent = await element.textContent();
    const placeholder = await element.getAttribute('placeholder');
    return (
        !textContent ||
        textContent.trim() === '' ||
        textContent.trim() === placeholder
    );
}
