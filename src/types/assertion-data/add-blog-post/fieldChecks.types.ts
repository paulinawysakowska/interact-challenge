export type AddBlogPostFieldKey =
    | 'postTitleTextFiled'
    | 'postSummaryTextFiled'
    | 'postContentTextFiled';

export type AddBlogPostFieldNameKey = 'title' | 'summary' | 'content';

export type AddBlogPostFieldCheck = {
    field: AddBlogPostFieldKey;
    fieldNameKey: AddBlogPostFieldNameKey;
};
