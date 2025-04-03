import { Page, Locator, expect } from '@playwright/test';

import {
    addBlogPostCopy,
    addBlogPostElements,
    getAddBlogPostLocators,
} from '@dicts';
import { addBlogPostLogs } from '@dicts/logs/addBlogPost.logs';
import {
    checkIfElementNotVisible,
    checkIfElementVisible,
    checkPlaceholder,
    checkTextFieldEmptyStatus,
    generateRandomText,
    uploadFile,
    verifyUrl,
} from '@utils';

export class AddBlogPost {
    readonly page: Page;
    readonly avatarButton: Locator;
    readonly upladImageButton: Locator;
    private readonly imagePath: string;
    readonly removeBackgroundButton: Locator;
    readonly postTitleTextFiled: Locator;
    readonly postSummaryTextFiled: Locator;
    readonly postContentTextFiled: Locator;
    private readonly titleWordCount: number = 5;
    private readonly summaryWordCount = 10;
    private readonly contentWordCount: number = 20;
    readonly fieldChecks: { element: Locator; fieldName: string }[];
    readonly continueButton: Locator;
    readonly postTitleErrorMsg: Locator;
    readonly contentErrorMsg: Locator;

    constructor(page: Page) {
        this.page = page;

        const {
            avatarButton,
            upladImageButton,
            removeBackgroundButton,
            postTitleTextFiled,
            postSummaryTextFiled,
            postContentTextFiled,
            continueButton,
            postTitleErrorMsg,
            contentErrorMsg,
        } = getAddBlogPostLocators(page);

        const { fieldNames } = addBlogPostElements;

        this.avatarButton = avatarButton;
        this.upladImageButton = upladImageButton;
        this.removeBackgroundButton = removeBackgroundButton;
        this.postTitleTextFiled = postTitleTextFiled;
        this.postSummaryTextFiled = postSummaryTextFiled;
        this.postContentTextFiled = postContentTextFiled;
        this.continueButton = continueButton;
        this.postTitleErrorMsg = postTitleErrorMsg;
        this.contentErrorMsg = contentErrorMsg;
        this.imagePath = addBlogPostElements.imagePath;

        this.fieldChecks = [
            { element: this.postTitleTextFiled, fieldName: fieldNames.title },
            {
                element: this.postSummaryTextFiled,
                fieldName: fieldNames.summary,
            },
            {
                element: this.postContentTextFiled,
                fieldName: fieldNames.content,
            },
        ];
    }

    async verifyHomeUrl(): Promise<void> {
        await verifyUrl(this.page, addBlogPostElements.urlTxt, true);
    }

    async checkAddBlogPostPagePlaceholders(): Promise<void> {
        const placeholderChecks = [
            {
                element: this.postTitleTextFiled,
                expectedText: addBlogPostCopy.placeholders.postTitle,
            },
            {
                element: this.postSummaryTextFiled,
                expectedText: addBlogPostCopy.placeholders.postSummary,
            },
            {
                element: this.postContentTextFiled,
                expectedText: addBlogPostCopy.placeholders.postContent,
            },
        ];

        for (const check of placeholderChecks) {
            await checkPlaceholder(check.element, check.expectedText);
        }
    }

    async checkIfFieldsAreEmpty(): Promise<void> {
        for (const check of this.fieldChecks) {
            const isEmpty = await checkTextFieldEmptyStatus(check.element);
            if (!isEmpty) {
                const actualText = await check.element.textContent();
                console.error(
                    addBlogPostLogs.fieldNotEmpty(check.fieldName, actualText)
                );
            }
            expect(isEmpty).toBe(true);
        }
    }

    async checkIfFieldsAreNotEmpty(): Promise<void> {
        for (const check of this.fieldChecks) {
            const isEmpty = await checkTextFieldEmptyStatus(check.element);
            if (isEmpty) {
                console.error(
                    addBlogPostLogs.fieldShouldNotBeEmpty(check.fieldName)
                );
            }
            expect(isEmpty).toBe(false);
        }
    }

    async uploadBlogImage(): Promise<void> {
        await uploadFile(this.upladImageButton, this.imagePath);
    }

    async checkRemoveBackgroundButtonNotVisible(): Promise<void> {
        await checkIfElementNotVisible(this.removeBackgroundButton);
    }

    async checkRemoveBackgroundButtonVisible(): Promise<void> {
        await checkIfElementVisible(this.removeBackgroundButton);
    }

    async fillTitleWithRandomText(): Promise<string> {
        const randomTitle = generateRandomText(this.titleWordCount);
        await this.postTitleTextFiled.type(randomTitle);
        await this.postTitleTextFiled.press(
            addBlogPostElements.keyboardButtons.tab
        );
        return randomTitle;
    }

    async fillSummaryWithRandomText(): Promise<void> {
        const randomSummary = generateRandomText(this.summaryWordCount);
        await this.postSummaryTextFiled.fill(randomSummary);
    }

    async fillContentWithRandomText(): Promise<string> {
        const randomContent = generateRandomText(this.contentWordCount);
        await this.postContentTextFiled.fill(randomContent);
        await this.postContentTextFiled.press(
            addBlogPostElements.keyboardButtons.tab
        );
        return randomContent;
    }

    async selectContinueButton(): Promise<void> {
        await this.continueButton.click();
    }
}
