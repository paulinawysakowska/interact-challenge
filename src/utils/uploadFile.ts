import { Locator } from '@playwright/test';

export async function uploadFile(fileInputLocator: Locator, filePath: string): Promise<void> {
    await fileInputLocator.setInputFiles(filePath);
}
