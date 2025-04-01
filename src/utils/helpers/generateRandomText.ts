import { faker } from '@faker-js/faker';

export function generateRandomText(numberOfWords: number): string {
    const text = faker.lorem.words(numberOfWords);
    return text.charAt(0).toUpperCase() + text.slice(1);
}
