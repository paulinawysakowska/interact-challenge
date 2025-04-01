import { test } from '@fixtures';
import {
    AddBlogPost,
    HomePage,
    PostPage,
    PublishPostDrawer,
    UserDrawer,
} from '@pages';
import {
    attachScreenshot,
    handleErrorsAndCompleteBlogPostSubmission,
} from '@utils';

const screenshotLabel = 'add-blog-post-test';

test.beforeEach(async ({ loginAsUser }) => {
    await loginAsUser();
});

test('Add Blog Post', async ({ page }, testInfo) => {
    const homePage = new HomePage(page);
    const userDrawer = new UserDrawer(page);
    const addBlogPost = new AddBlogPost(page);
    const publishPostDrawer = new PublishPostDrawer(page);
    const postPage = new PostPage(page);

    await attachScreenshot(testInfo, page, screenshotLabel);

    await homePage.clickAvatarButton();

    await userDrawer.isLogOffButtonVisible();
    await userDrawer.clickAddBlogPostButton();

    await attachScreenshot(testInfo, page, screenshotLabel);

    await addBlogPost.verifyHomeUrl();
    await addBlogPost.checkAddBlogPostPagePlaceholders();
    await addBlogPost.checkIfFieldsAreEmpty();
    await addBlogPost.checkRemoveBackgroundButtonNotVisible();
    await addBlogPost.uploadBlogImage();
    await addBlogPost.checkRemoveBackgroundButtonVisible();

    const randomTitle = await addBlogPost.fillTitleWithRandomText();
    // TO DO: Uncomment the line below when the bug is fixed
    // const randomContent = await addBlogPost.fillContentWithRandomText();

    await attachScreenshot(testInfo, page, screenshotLabel);

    await addBlogPost.fillSummaryWithRandomText();

    await attachScreenshot(testInfo, page, screenshotLabel);

    await addBlogPost.fillContentWithRandomText();

    await attachScreenshot(testInfo, page, screenshotLabel);

    await addBlogPost.checkIfFieldsAreNotEmpty();
    await addBlogPost.selectContinueButton();

    await attachScreenshot(testInfo, page, screenshotLabel);

    await publishPostDrawer.verifyTextsAreVisible();
    await publishPostDrawer.verifySwitchButtonIsUnchecked();

    await publishPostDrawer.clickSwitchButton();

    await attachScreenshot(testInfo, page, screenshotLabel);

    await publishPostDrawer.verifySwitchButtonIsChecked();
    await publishPostDrawer.clickSaveButton();

    await attachScreenshot(testInfo, page, screenshotLabel);

    // Step below can be removed when the bug is fixed
    await handleErrorsAndCompleteBlogPostSubmission(
        addBlogPost,
        publishPostDrawer
    );

    await postPage.verifyPostPageUrl();
    await postPage.verifyPublishedPostTitle(randomTitle);
    // TO DO: Uncomment the line below when the bug is fixed
    // await postPage.verifyPublishedPostContent(randomContent);

    await attachScreenshot(testInfo, page, screenshotLabel);
});

/*
TO DO: 
- Add log out after test
- Add cleanup after test
- Fix the bug with post publishing
- Analyze, why subtitles are not visible on the post published page
- Analyze if actions on the Home Page can be moved to the 'beforeEach' hook
*/
