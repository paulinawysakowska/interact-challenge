import { test as base } from '@playwright/test';

import { PageManager } from '@utils';

export const pageManagerTest = base.extend<{
    pages: PageManager;
}>({
    pages: async ({ page }, use) => {
        const manager = new PageManager(page);
        await use(manager);
    },
});
