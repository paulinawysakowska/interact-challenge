export type PlaceholderFieldKey =
    | 'postTitleTextFiled'
    | 'postSummaryTextFiled'
    | 'postContentTextFiled';

export type PlaceholderTextKey = 'postTitle' | 'postSummary' | 'postContent';

export type PlaceholderCheck = {
    field: PlaceholderFieldKey;
    expectedTextKey: PlaceholderTextKey;
};

export type AddBlogPostFieldKey =
    | 'postTitleTextFiled'
    | 'postSummaryTextFiled'
    | 'postContentTextFiled';

export type AddBlogPostFieldNameKey = 'title' | 'summary' | 'content';

export type AddBlogPostFieldCheck = {
    field: AddBlogPostFieldKey;
    fieldNameKey: AddBlogPostFieldNameKey;
};
