import { PageManager } from '@utils';

export type LoginFixtures = {
    pages: PageManager;
    loginAsUser: () => Promise<void>;
};
