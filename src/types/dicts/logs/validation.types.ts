export type ValidationLogs = {
    fieldNotEmpty: (fieldName: string, current: string | null) => string;
    fieldShouldNotBeEmpty: (fieldName: string) => string;
    textNotVisible: (text: string) => string;
    fieldNotFilled: (locator: string) => string;
    unexpectedPlaceholder: (
        expectedPlaceholder: string,
        actualPlaceholder: string | null,
        element: string
    ) => string;
};
