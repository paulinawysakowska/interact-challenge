import { AddBlogPost } from '../pages/addBlogPost.page';
import { PublishPostDrawer } from '../pages/publishPostDrawer.page';

export async function handleErrorsAndCompleteBlogPostSubmission(
    addBlogPost: AddBlogPost,
    publishPostDrawer: PublishPostDrawer
): Promise<void> {
    const isTitleErrorVisible = await addBlogPost.postTitleErrorMsg.isVisible();
    const isContentErrorVisible = await addBlogPost.contentErrorMsg.isVisible();

    if (isTitleErrorVisible) {
        console.warn('Title error is visible. Refilling title...');
        await addBlogPost.fillTitleWithRandomText();
    }

    if (isContentErrorVisible) {
        console.warn('Content error is visible. Refilling content...');
        await addBlogPost.fillContentWithRandomText();
    }

    if (isTitleErrorVisible || isContentErrorVisible) {
        await addBlogPost.selectContinueButton();

        const isSwitchChecked = await publishPostDrawer.verifySwitchButtonIsChecked();

        if (!isSwitchChecked) {
            await publishPostDrawer.clickSwitchButton();
        }

        // await publishPostDrawer.clickSaveButton();
    }
}
