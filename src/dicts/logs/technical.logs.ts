import { TechnicalLogs } from '@types';

export const technicalLogs: TechnicalLogs = {
    missingInputText: 'No text provided for input.',

    labelTextMismatch: (expected, actual, forAttribute) =>
        `Error: Expected text "${expected}" but found "${actual ?? 'null'}" for label with 'for' attribute: ${forAttribute}`,
};
