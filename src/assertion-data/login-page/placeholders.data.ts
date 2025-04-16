import { Locator, Page } from 'playwright/test';

import { getLoginPageLocators, loginPageTexts } from '@dicts';

export const loginPagePlaceholderChecks = (
    page: Page
): { element: Locator; expectedText: string }[] => {
    const { usernameInput, passwordInput } = getLoginPageLocators(page);

    return [
        {
            element: usernameInput,
            expectedText: loginPageTexts.placeholders.username,
        },
        {
            element: passwordInput,
            expectedText: loginPageTexts.placeholders.password,
        },
    ];
};
