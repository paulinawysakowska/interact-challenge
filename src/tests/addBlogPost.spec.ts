import { test } from '../fixtures/loginFixture'; 
import { AddBlogPost } from '../pages/addBlogPost.page';
import { HomePage } from '../pages/homePage.page';
import { PublishPostDrawer } from '../pages/publishPostDrawer.page';
import { UserDrawer } from '../pages/userDrawer.page';
import { handleErrorsAndCompleteBlogPostSubmission } from '../utils/handleError';

test.beforeEach(async ({ loginAsUser }) => {
  await loginAsUser();
});

test('Add Blog Post', async ({ page }) => {
  const homePage = new HomePage(page);
  const userDrawer = new UserDrawer(page);
  const addBlogPost = new AddBlogPost(page);
  const publishPostDrawer = new PublishPostDrawer(page);
  
  await homePage.clickAvatarButton();

  await userDrawer.isLogOffButtonVisible()
  await userDrawer.clickAddBlogPostButton();

  await addBlogPost.verifyHomeUrl();
  await addBlogPost.checkAddBlogPostPagePlaceholders();
  await addBlogPost.checkIfFieldsAreEmpty();
  await addBlogPost.checkRemoveBackgroundButtonNotVisible();
  await addBlogPost.uploadBlogImage();
  await addBlogPost.checkRemoveBackgroundButtonVisible();

  await addBlogPost.fillTitleWithRandomText();
  await addBlogPost.fillSummaryWithRandomText();
  await addBlogPost.fillContentWithRandomText();
  await addBlogPost.checkIfFieldsAreNotEmpty();
  await addBlogPost.selectContinueButton();

  await publishPostDrawer.verifyTextsAreVisible();
  await publishPostDrawer.verifySwitchButtonIsUnchecked(); 
  await publishPostDrawer.clickSwitchButton();
  await publishPostDrawer.verifySwitchButtonIsChecked();
  await publishPostDrawer.clickSaveButton();

  // Step below can be removed when the bug is fixed
  await handleErrorsAndCompleteBlogPostSubmission(addBlogPost, publishPostDrawer);

  
});

/*
TO DO: 
- Add log out after test
- Add cleanup after test
- Fix the bug with post publishing
- Analyze, why subtitles are not visible on the post published page
- Analyze if actions on the Home Page can be moved to the 'beforeEach' hook
*/