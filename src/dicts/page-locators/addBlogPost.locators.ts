import { Page } from '@playwright/test';

import { addBlogPostCopy, addBlogPostElements } from '@dicts';
import { AddBlogPostLocators } from '@types';

export const getAddBlogPostLocators = (page: Page): AddBlogPostLocators => {
    const { altTexts, ariaLabels, inputNames, elementNames } =
        addBlogPostElements;
    const { errors } = addBlogPostCopy;

    return {
        avatarButton: page.locator(`img[alt="${altTexts.qaTest}"]`),
        uploadImageButton: page.locator(
            `input[name="${inputNames.uploadImage}"]`
        ),
        removeBackgroundButton: page.locator(
            `span[aria-label="${ariaLabels.removeBackground}"]`
        ),
        postTitleTextFiled: page.locator(
            `h1[aria-label="${ariaLabels.postTitle}"]`
        ),
        postSummaryTextFiled: page.locator(
            `p[aria-label="${ariaLabels.postSummary}"]`
        ),
        postContentTextFiled: page.getByRole('textbox', {
            name: elementNames.postContent,
        }),
        continueButton: page.locator(`a[aria-label="${ariaLabels.continue}"]`),
        postTitleErrorMsg: page.locator(`text=${errors.postTitleMissing}`),
        contentErrorMsg: page.locator(`text=${errors.contentMissing}`),
    };
};
