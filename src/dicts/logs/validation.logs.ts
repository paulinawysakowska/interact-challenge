import { ValidationLogs } from '@types';

export const validationLogs: ValidationLogs = {
    fieldNotEmpty: (fieldName, current) =>
        `Field "${fieldName}" is not empty. Current content: "${current?.trim()}"`,

    fieldShouldNotBeEmpty: (fieldName) =>
        `Field "${fieldName}" is empty when it should not be.`,

    textNotVisible: (text) => `Text "${text}" is not visible on the page.`,

    fieldNotFilled: (locator) =>
        `Error: The field with locator "${locator}" is not filled.`,

    unexpectedPlaceholder: (expected, actual, element) =>
        `Error: Expected placeholder "${expected}" but found "${actual ?? 'null'}" for element: ${element}`,
};
