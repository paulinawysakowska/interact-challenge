import { interactionLogs } from '@dicts';
import { AddBlogPost, PublishPostDrawer } from '@pages';

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
