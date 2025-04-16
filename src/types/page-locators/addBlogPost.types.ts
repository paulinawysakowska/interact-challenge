import { Locator } from '@playwright/test';

export type AddBlogPostLocators = {
    avatarButton: Locator;
    uploadImageButton: Locator;
    removeBackgroundButton: Locator;
    postTitleTextFiled: Locator;
    postSummaryTextFiled: Locator;
    postContentTextFiled: Locator;
    continueButton: Locator;
    postTitleErrorMsg: Locator;
    contentErrorMsg: Locator;
};
