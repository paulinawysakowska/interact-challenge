import { Locator, Page } from 'playwright/test';

import { getLoginPageLocators, loginPageCopy } from '@dicts';

export const loginPagePlaceholderChecks = (
    page: Page
): { element: Locator; expectedText: string }[] => {
    const { usernameInput, passwordInput } = getLoginPageLocators(page);

    return [
        {
            element: usernameInput,
            expectedText: loginPageCopy.placeholders.username,
        },
        {
            element: passwordInput,
            expectedText: loginPageCopy.placeholders.password,
        },
    ];
};
