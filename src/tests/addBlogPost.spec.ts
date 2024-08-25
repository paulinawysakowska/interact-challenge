import { test } from '../fixtures/loginFixture'; 
import { AddBlogPost } from '../pages/addBlogPost.page';
import { HomePage } from '../pages/homePage.page';
import { PublishPostDrawer } from '../pages/publishPostDrawer.page';
import { UserDrawer } from '../pages/userDrawer.page';

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
  await page.waitForTimeout(3000);  
  await addBlogPost.fillSummaryWithRandomText();
  await page.waitForTimeout(3000);  
  await addBlogPost.fillContentWithRandomText();
  await page.waitForTimeout(3000);  
  await addBlogPost.checkIfFieldsAreNotEmpty();
  await addBlogPost.selectContinueButton();

  // await publishPostDrawer.verifyTextsAreVisible();
  // await publishPostDrawer.verifySwitchButtonIsUnchecked(); 
  await publishPostDrawer.clickSwitchButton();
  // await publishPostDrawer.verifySwitchButtonIsChecked();
  await publishPostDrawer.clickSaveButton();
  await page.waitForTimeout(3000);
  await addBlogPost.fillContentWithRandomText();
  await page.waitForTimeout(3000);
  await addBlogPost.selectContinueButton();
  await publishPostDrawer.clickSwitchButton();
  await publishPostDrawer.clickSaveButton();


});
