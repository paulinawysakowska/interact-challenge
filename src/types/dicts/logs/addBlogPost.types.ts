export type AddBlogPostLogs = {
    fieldNotEmpty: (fieldName: string, current: string | null) => string;
    fieldShouldNotBeEmpty: (fieldName: string) => string;
};
