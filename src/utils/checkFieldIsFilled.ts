import { Locator } from '@playwright/test';

export async function checkFieldIsFilled(locator: Locator): Promise<boolean> {
    const value = await locator.inputValue();
    const isFilled = value.trim().length > 0;

    if (!isFilled) {
        console.error(`Error: The field with locator "${locator}" is not filled.`);
    }

    return isFilled; 
}
