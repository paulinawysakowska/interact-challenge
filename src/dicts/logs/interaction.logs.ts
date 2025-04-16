import { InteractionLogs } from '@types';

export const interactionLogs: InteractionLogs = {
    refillingField: (fieldName) =>
        `Refilling field: "${fieldName}" due to validation error.`,

    switchShouldBeUnchecked:
        'Switch button is checked, but it should be unchecked.',

    switchShouldBeChecked:
        'Switch button is unchecked, but it should be checked.',
};
