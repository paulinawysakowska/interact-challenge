import { test as base } from '@playwright/test';

import { PageManagerFixtures } from '@types';
import { PageManager } from '@utils';

export const pageManagerTest = base.extend<PageManagerFixtures>({
    pages: async ({ page }, use) => {
        const manager = new PageManager(page);
        await use(manager);
    },
});
