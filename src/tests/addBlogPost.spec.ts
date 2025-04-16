import { loginTest as test } from '@fixtures';
import {
    attachScreenshot,
    handleErrorsAndCompleteBlogPostSubmission,
} from '@utils';

const screenshotLabel = 'add-blog-post-test';

test.beforeEach(async ({ loginAsUser }) => {
    await loginAsUser();
});

test('Add Blog Post', async ({ pages }, testInfo) => {
    await attachScreenshot(testInfo, pages.rawPage, screenshotLabel);

    await pages.homePage.clickAvatarButton();

    await pages.userDrawer.isLogOffButtonVisible();
    await pages.userDrawer.clickAddBlogPostButton();

    await attachScreenshot(testInfo, pages.rawPage, screenshotLabel);

    await pages.addBlogPost.verifyHomeUrl();
    await pages.addBlogPost.checkAddBlogPostPagePlaceholders();
    await pages.addBlogPost.checkIfFieldsAreEmpty();
    await pages.addBlogPost.checkRemoveBackgroundButtonNotVisible();
    await pages.addBlogPost.uploadBlogImage();
    await pages.addBlogPost.checkRemoveBackgroundButtonVisible();

    const randomTitle = await pages.addBlogPost.fillTitleWithRandomText();
    // TO DO: Uncomment the line below when the bug is fixed
    // const randomContent = await addBlogPost.fillContentWithRandomText();

    await attachScreenshot(testInfo, pages.rawPage, screenshotLabel);

    await pages.addBlogPost.fillSummaryWithRandomText();

    await attachScreenshot(testInfo, pages.rawPage, screenshotLabel);

    await pages.addBlogPost.fillContentWithRandomText();

    await attachScreenshot(testInfo, pages.rawPage, screenshotLabel);

    await pages.addBlogPost.checkIfFieldsAreNotEmpty();
    await pages.addBlogPost.selectContinueButton();

    await attachScreenshot(testInfo, pages.rawPage, screenshotLabel);

    await pages.publishPostDrawer.verifyTextsAreVisible();
    await pages.publishPostDrawer.verifySwitchButtonIsUnchecked();
    await pages.publishPostDrawer.clickSwitchButton();

    await attachScreenshot(testInfo, pages.rawPage, screenshotLabel);

    await pages.publishPostDrawer.verifySwitchButtonIsChecked();
    await pages.publishPostDrawer.clickSaveButton();

    await attachScreenshot(testInfo, pages.rawPage, screenshotLabel);

    // Step below can be removed when the bug is fixed
    await handleErrorsAndCompleteBlogPostSubmission(
        pages.addBlogPost,
        pages.publishPostDrawer
    );

    await pages.postPage.verifyPostPageUrl();
    await pages.postPage.verifyPublishedPostTitle(randomTitle);
    // TO DO: Uncomment the line below when the bug is fixed
    // await postPage.verifyPublishedPostContent(randomContent);

    await attachScreenshot(testInfo, pages.rawPage, screenshotLabel);
});

/*
TO DO: 
- Add log out after test
- Add cleanup after test
- Fix the bug with post publishing
- Analyze, why subtitles are not visible on the post published page
- Analyze if actions on the Home Page can be moved to the 'beforeEach' hook
*/
