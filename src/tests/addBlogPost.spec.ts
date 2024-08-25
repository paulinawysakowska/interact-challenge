import { test } from '../fixtures/loginFixture';
import { AddBlogPost } from '../pages/addBlogPost.page';
import { HomePage } from '../pages/homePage.page';
import { PostPage } from '../pages/postPage.page';
import { PublishPostDrawer } from '../pages/publishPostDrawer.page';
import { UserDrawer } from '../pages/userDrawer.page';
import { attachScreenshot } from '../utils/attachScreenshot';
import { handleErrorsAndCompleteBlogPostSubmission } from '../utils/handleError';

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

    await attachScreenshot(testInfo, page, screenshotLabel);

    const randomTitle = await addBlogPost.fillTitleWithRandomText();
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
    await postPage.werifyPublishedPostTitle(randomTitle);

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
