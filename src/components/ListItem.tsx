import styled from '@emotion/native';
import {Image} from 'react-native';
import {InnerView} from './common/InnerView';
import Text from './common/Text';
import React from 'react';

export const ListItem = ({
  listInfo,
  ad,
}: {
  listInfo: {
    id: number;
    title: string;
    comments: number;
    createdAt: string;
    user: string;
  };
  ad: string | null;
}) => {
  const {id, title, comments, createdAt, user} = listInfo;
  const date = new Date(createdAt);

  return (
    <IssueListItem>
      {ad ? (
        <Image
          style={{width: '100%', minHeight: 40}}
          source={{
            uri: ad,
          }}
        />
      ) : (
        <InnerView style={{justifyContent: 'center'}}>
          <Text numberOfLines={2}>{title}</Text>
          <InnerView style={{flexDirection: 'row', flex: 1}}>
            <InnerView
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 8,
              }}>
              <Text
                fontSize={10}
                fontColor={'rgba(0, 0, 0, 0.4)'}
                margin={'0px 8px 0px 0px'}>
                #{id}
              </Text>

              <Text
                fontSize={10}
                fontColor={'rgba(0, 0, 0, 1)'}
                margin={'0px 8px 0px 0px'}>
                {date.toLocaleDateString('ko-kr')}
              </Text>
              <Text fontSize={10} fontColor={'rgba(0, 0, 0, 1)'}>
                {user}
              </Text>
            </InnerView>
            <InnerView
              style={{
                flex: 1,
                marginTop: 8,
                alignItems: 'flex-end',
              }}>
              <Text fontSize={12}>{comments}</Text>
            </InnerView>
          </InnerView>
        </InnerView>
      )}
    </IssueListItem>
  );
};

const IssueListItem = styled.View`
  padding: 12px;
  width: 100%;
  min-height: 75px;

  margin-bottom: 16px;
  justify-content: center;
  background: #fff;

  border-radius: 12px;
  box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.2);
`;
