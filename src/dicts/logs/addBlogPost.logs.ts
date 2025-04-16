import { AddBlogPostLogs } from '@types';

export const addBlogPostLogs: AddBlogPostLogs = {
    fieldNotEmpty: (fieldName, current) =>
        `Field "${fieldName}" is not empty. Current content: "${current?.trim()}"`,

    fieldShouldNotBeEmpty: (fieldName) =>
        `Field "${fieldName}" is empty when it should not be.`,
};
