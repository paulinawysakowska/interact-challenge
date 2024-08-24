import { Locator } from '@playwright/test';

export async function enterText(locator: Locator, text: string | undefined): Promise<void> {
    if (!text) {
        console.error('No text provided for input');
        return;
    }

    await locator.type(text); 
}
