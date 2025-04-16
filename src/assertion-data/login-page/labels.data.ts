import { loginPageElements, loginPageTexts } from '@dicts';

export const loginPageLabelChecks = [
    {
        forAttribute: loginPageElements.labelForAttributes.username,
        expectedText: loginPageTexts.labelsText.usernameLabel,
    },
    {
        forAttribute: loginPageElements.labelForAttributes.password,
        expectedText: loginPageTexts.labelsText.passwordLabel,
    },
];
