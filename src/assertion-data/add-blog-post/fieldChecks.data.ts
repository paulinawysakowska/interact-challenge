import { AddBlogPostFieldCheck } from '@types';

export const addBlogPostFieldChecks: AddBlogPostFieldCheck[] = [
    { field: 'postTitleTextFiled', fieldNameKey: 'title' },
    { field: 'postSummaryTextFiled', fieldNameKey: 'summary' },
    { field: 'postContentTextFiled', fieldNameKey: 'content' },
];
