import { Locator } from '@playwright/test';

/**
 * Uploads a file by setting the input element's value to the specified file path.
 *
 * @param fileInputLocator - Locator pointing to the file input element
 * @param filePath - Path to the file to be uploaded (relative to project root)
 */

export async function uploadFile(
    fileInputLocator: Locator,
    filePath: string
): Promise<void> {
    await fileInputLocator.setInputFiles(filePath);
}
