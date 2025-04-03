export const addBlogPostLogs = {
    fieldNotEmpty: (fieldName: string, current: string | null): string =>
        `Field "${fieldName}" is not empty. Current content: "${current?.trim()}"`,

    fieldShouldNotBeEmpty: (fieldName: string): string =>
        `Field "${fieldName}" is empty when it should not be.`,
};
