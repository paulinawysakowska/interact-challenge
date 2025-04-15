import { PlaceholderCheck } from '@types';

export const addBlogPostPlaceholderChecks: PlaceholderCheck[] = [
    { field: 'postTitleTextFiled', expectedTextKey: 'postTitle' },
    { field: 'postSummaryTextFiled', expectedTextKey: 'postSummary' },
    { field: 'postContentTextFiled', expectedTextKey: 'postContent' },
];
