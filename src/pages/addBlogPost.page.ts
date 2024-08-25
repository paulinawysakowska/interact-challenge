import { Page, Locator, expect } from '@playwright/test';
import { verifyUrl } from '../utils/verifyUrlContains';
import { addBlogPostDict } from '../dicts/addBlogPostDict';
import { uploadFile } from '../utils/uploadFile';
import { checkIfElementNotVisible } from '../utils/checkIfElementNotVisible';
import { checkIfElementVisible } from '../utils/checkIfElementVisible';
import { checkPlaceholder } from '../utils/checkPlaceholder';
import { generateRandomText } from '../utils/generateRandomText';
import { checkTextFieldEmptyStatus } from '../utils/checkTextFieldEmptyStatus';

export class AddBlogPost {
    readonly page: Page;
    readonly avatarButton: Locator;
    readonly upladImageButton: Locator;
    private readonly imagePath: string;
    readonly removeBackgroundButton: Locator;
    readonly uploadImagePlaceholder: Locator;
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
        this.avatarButton = page.locator('img[alt="QA Test"]');
        this.upladImageButton = page.locator('input[name="qqfile"]');
        this.imagePath = 'src/img/post-image.jpg';
        this.removeBackgroundButton = page.locator(
            'span[aria-label="Remove background image"]'
        );
        this.postTitleTextFiled = page.locator('h1[aria-label="Post title"]');
        this.postSummaryTextFiled = page.locator(
            'p[aria-label="Post Summary"]'
        );
        this.postContentTextFiled = page.getByRole('textbox', {
            name: 'Rich Text Editor,',
        });
        this.continueButton = page.locator('a[aria-label="Continue"]');
        this.postTitleErrorMsg = page.locator(
            `text=${addBlogPostDict.postTitleErrorMsg}`
        );
        this.contentErrorMsg = page.locator(
            `text=${addBlogPostDict.contentErrorMsg}`
        );

        this.fieldChecks = [
            { element: this.postTitleTextFiled, fieldName: 'Title' },
            { element: this.postSummaryTextFiled, fieldName: 'Summary' },
            { element: this.postContentTextFiled, fieldName: 'Content' },
        ];
    }

    async verifyHomeUrl(): Promise<void> {
        await verifyUrl(this.page, addBlogPostDict.urlTxt, true);
    }

    async checkAddBlogPostPagePlaceholders() {
        const placeholderChecks = [
            {
                element: this.postTitleTextFiled,
                expectedText: addBlogPostDict.placeholders.postTitle,
            },
            {
                element: this.postSummaryTextFiled,
                expectedText: addBlogPostDict.placeholders.postSummary,
            },
            {
                element: this.postContentTextFiled,
                expectedText: addBlogPostDict.placeholders.postContent,
            },
        ];

        for (const check of placeholderChecks) {
            await checkPlaceholder(check.element, check.expectedText);
        }
    }

    async checkIfFieldsAreEmpty() {
        for (const check of this.fieldChecks) {
            const isEmpty = await checkTextFieldEmptyStatus(check.element);
            if (!isEmpty) {
                const actualText = await check.element.textContent();
                console.error(
                    `Field "${check.fieldName}" is not empty. Current content: "${actualText?.trim()}"`
                );
            }
            expect(isEmpty).toBe(true);
        }
    }

    async checkIfFieldsAreNotEmpty() {
        for (const check of this.fieldChecks) {
            const isEmpty = await checkTextFieldEmptyStatus(check.element);
            if (isEmpty) {
                console.error(
                    `Field "${check.fieldName}" is empty when it should not be.`
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
        await this.postTitleTextFiled.press('Tab');
        return randomTitle;
    }

    // https://jamesroberts-trial.interactgo.com/blog/post/create/345
    // https://jamesroberts-trial.interactgo.com/blog/69/post/2222

    async fillSummaryWithRandomText(): Promise<void> {
        const randomSummary = generateRandomText(this.summaryWordCount);
        await this.postSummaryTextFiled.fill(randomSummary);
    }

    async fillContentWithRandomText(): Promise<void> {
        const randomContent = generateRandomText(this.contentWordCount);
        await this.postContentTextFiled.fill(randomContent);
        await this.postContentTextFiled.press('Tab');
    }

    async selectContinueButton(): Promise<void> {
        await this.continueButton.click();
    }
}
