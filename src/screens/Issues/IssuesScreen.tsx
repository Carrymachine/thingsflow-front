import {FlatList, Linking, Pressable, Text} from 'react-native';
import {useIssues} from '../../lib/hooks/useIssues';

import React from 'react';
import {ListItem} from '../../components/ListItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../../StackParamList';

type IssueProps = NativeStackScreenProps<StackParamList>;

export const IssuesScreen = ({navigation}: IssueProps) => {
  const issues = useIssues();

  if (issues.isLoading) {
    return <Text>로딩중</Text>;
  }

  return (
    <>
      <FlatList
        style={{paddingHorizontal: 16}}
        data={issues.data?.pages
          .map(page => page)
          .flat()
          .sort((a, b) => b.comments - a.comments)
          .filter(issue => issue.state === 'open')}
        renderItem={({item: issue, index: index}) => {
          const info = {
            user: issue.user.login,
            id: issue.id,
            title: issue.title,
            comments: issue.comments,
            createdAt: issue.created_at,
          };

          return (
            <Pressable
              onPress={() =>
                index === 4
                  ? Linking.openURL('https://thingsflow.com/ko/home')
                  : navigation.navigate('IssueDetail', {
                      detail: issue.body,
                      issueInfo: {
                        ...info,
                        image: issue.user.avatar_url,
                      },
                    })
              }>
              <ListItem
                listInfo={info}
                ad={
                  index === 4
                    ? 'https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7'
                    : null
                }
              />
            </Pressable>
          );
        }}
        onEndReached={() => issues.fetchNextPage()}
      />
    </>
  );
};
