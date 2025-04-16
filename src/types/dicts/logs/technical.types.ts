export type TechnicalLogs = {
    missingInputText: string;
    labelTextMismatch: (
        expected: string,
        actual: string | null,
        forAttribute: string
    ) => string;
};
