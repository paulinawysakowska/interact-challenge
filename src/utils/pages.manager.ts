import { Page } from '@playwright/test';

import {
    LoginPage,
    HomePage,
    PostPage,
    PublishPostDrawer,
    UserDrawer,
    AddBlogPost,
} from '@pages';

export class PageManager {
    constructor(private readonly page: Page) {}

    private _loginPage?: LoginPage;
    private _homePage?: HomePage;
    private _postPage?: PostPage;
    private _publishPostDrawer?: PublishPostDrawer;
    private _userDrawer?: UserDrawer;
    private _addBlogPost?: AddBlogPost;

    get loginPage(): LoginPage {
        if (!this._loginPage) {
            this._loginPage = new LoginPage(this.page);
        }
        return this._loginPage;
    }

    get homePage(): HomePage {
        if (!this._homePage) {
            this._homePage = new HomePage(this.page);
        }
        return this._homePage;
    }

    get postPage(): PostPage {
        if (!this._postPage) {
            this._postPage = new PostPage(this.page);
        }
        return this._postPage;
    }

    get publishPostDrawer(): PublishPostDrawer {
        if (!this._publishPostDrawer) {
            this._publishPostDrawer = new PublishPostDrawer(this.page);
        }
        return this._publishPostDrawer;
    }

    get userDrawer(): UserDrawer {
        if (!this._userDrawer) {
            this._userDrawer = new UserDrawer(this.page);
        }
        return this._userDrawer;
    }
    get addBlogPost(): AddBlogPost {
        if (!this._addBlogPost) {
            this._addBlogPost = new AddBlogPost(this.page);
        }
        return this._addBlogPost;
    }

    get rawPage(): Page {
        return this.page;
    }
}
