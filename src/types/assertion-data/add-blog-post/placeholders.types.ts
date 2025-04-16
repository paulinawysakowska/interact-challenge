export type PlaceholderFieldKey =
    | 'postTitleTextFiled'
    | 'postSummaryTextFiled'
    | 'postContentTextFiled';

export type PlaceholderTextKey = 'postTitle' | 'postSummary' | 'postContent';

export type PlaceholderCheck = {
    field: PlaceholderFieldKey;
    expectedTextKey: PlaceholderTextKey;
};
