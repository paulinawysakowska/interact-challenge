import { PublishPostDrawerLogs } from '@types';

export const publishPostDrawerLogs: PublishPostDrawerLogs = {
    switchShouldBeUnchecked:
        'Switch button is checked, but it should be unchecked.',
    switchShouldBeChecked:
        'Switch button is unchecked, but it should be checked.',
    textNotVisible: (text) => `Text "${text}" is not visible on the page.`,
};
