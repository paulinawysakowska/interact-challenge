import { Locator } from '@playwright/test';

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
