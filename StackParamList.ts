export type StackParamList = {
  Issues: undefined;
  IssueDetail: {
    detail: string;
    issueInfo: {
      user: string;
      id: number;
      title: string;
      comments: number;
      createdAt: string;
      image: string;
    };
  };
};
