import { interactionLogs } from '@dicts';
import { AddBlogPost, PublishPostDrawer } from '@pages';

/**
 * Handles validation errors during blog post submission by refilling required fields and re-submitting the post.
 *
 * This function:
 * - Checks if title or content validation errors are visible,
 * - Refills the missing fields with random data if needed,
 * - Retriggers the submit flow through the publish post drawer if errors were present.
 *
 * Intended as a temporary fallback until the validation flow is stabilized.
 *
 * @param addBlogPost - Page object representing the Add Blog Post form
 * @param publishPostDrawer - Page object for the publish confirmation drawer
 */

export async function handleErrorsAndCompleteBlogPostSubmission(
    addBlogPost: AddBlogPost,
    publishPostDrawer: PublishPostDrawer
): Promise<void> {
    const isTitleErrorVisible =
        await addBlogPost.locators.postTitleErrorMsg.isVisible();
    const isContentErrorVisible =
        await addBlogPost.locators.contentErrorMsg.isVisible();

    if (isTitleErrorVisible) {
        console.warn(interactionLogs.refillingField('Title'));
        await addBlogPost.fillTitleWithRandomText();
    }

    if (isContentErrorVisible) {
        console.warn(interactionLogs.refillingField('Content'));
        await addBlogPost.fillContentWithRandomText();
    }

    if (isTitleErrorVisible || isContentErrorVisible) {
        await addBlogPost.selectContinueButton();

        const isSwitchChecked =
            await publishPostDrawer.verifySwitchButtonIsChecked();

        if (!isSwitchChecked) {
            await publishPostDrawer.clickSwitchButton();
        }

        await publishPostDrawer.clickSaveButton();
    }
}
