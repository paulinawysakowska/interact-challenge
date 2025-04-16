import { loginPageCopy, loginPageElements } from '@dicts';

export const loginPageLabelChecks = [
    {
        forAttribute: loginPageElements.labelForAttributes.username,
        expectedText: loginPageCopy.labelsText.usernameLabel,
    },
    {
        forAttribute: loginPageElements.labelForAttributes.password,
        expectedText: loginPageCopy.labelsText.passwordLabel,
    },
];
