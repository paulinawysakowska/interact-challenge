import { Page, Locator, expect } from '@playwright/test';

import {
    addBlogPostFieldChecks,
    addBlogPostPlaceholderChecks,
} from '@assertion-data';
import {
    addBlogPostCopy,
    addBlogPostElements,
    addBlogPostLogs,
    getAddBlogPostLocators,
} from '@dicts';
import { AddBlogPostLocators } from '@types';
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
    readonly locators: AddBlogPostLocators;

    private readonly imagePath: string;
    private readonly titleWordCount: number = 5;
    private readonly summaryWordCount = 10;
    private readonly contentWordCount: number = 20;
    readonly fieldChecks: { element: Locator; fieldName: string }[];

    constructor(page: Page) {
        this.page = page;
        this.locators = getAddBlogPostLocators(page);
        this.imagePath = addBlogPostElements.imagePath;

        const { fieldNames } = addBlogPostElements;

        this.fieldChecks = addBlogPostFieldChecks.map(
            ({ field, fieldNameKey }) => ({
                element: this.locators[field] as Locator,
                fieldName: fieldNames[fieldNameKey],
            })
        );
    }

    async verifyHomeUrl(): Promise<void> {
        await verifyUrl(this.page, addBlogPostElements.urlTxt, true);
    }

    async checkAddBlogPostPagePlaceholders(): Promise<void> {
        for (const { field, expectedTextKey } of addBlogPostPlaceholderChecks) {
            const element = this.locators[field] as Locator;
            const expectedText = addBlogPostCopy.placeholders[expectedTextKey];
            await checkPlaceholder(element, expectedText);
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
        await uploadFile(this.locators.uploadImageButton, this.imagePath);
    }

    async checkRemoveBackgroundButtonNotVisible(): Promise<void> {
        await checkIfElementNotVisible(this.locators.removeBackgroundButton);
    }

    async checkRemoveBackgroundButtonVisible(): Promise<void> {
        await checkIfElementVisible(this.locators.removeBackgroundButton);
    }

    async fillTitleWithRandomText(): Promise<string> {
        const randomTitle = generateRandomText(this.titleWordCount);
        await this.locators.postTitleTextFiled.type(randomTitle);
        await this.locators.postTitleTextFiled.press(
            addBlogPostElements.keyboardButtons.tab
        );
        return randomTitle;
    }

    async fillSummaryWithRandomText(): Promise<void> {
        const randomSummary = generateRandomText(this.summaryWordCount);
        await this.locators.postSummaryTextFiled.fill(randomSummary);
    }

    async fillContentWithRandomText(): Promise<string> {
        const randomContent = generateRandomText(this.contentWordCount);
        await this.locators.postContentTextFiled.fill(randomContent);
        await this.locators.postContentTextFiled.press(
            addBlogPostElements.keyboardButtons.tab
        );
        return randomContent;
    }

    async selectContinueButton(): Promise<void> {
        await this.locators.continueButton.click();
    }
}
