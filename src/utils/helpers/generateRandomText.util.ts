import { faker } from '@faker-js/faker';

/**
 * Generates a capitalized random text consisting of the specified number of words.
 *
 * Uses Faker's lorem generator and capitalizes the first character of the result.
 *
 * @param numberOfWords - Number of words to include in the generated text
 * @returns Capitalized random text
 */

export function generateRandomText(numberOfWords: number): string {
    const text = faker.lorem.words(numberOfWords);
    return text.charAt(0).toUpperCase() + text.slice(1);
}
