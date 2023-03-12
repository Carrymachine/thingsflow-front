import styled from '@emotion/native';

import {InnerView} from './common/InnerView';
import Text from './common/Text';
import {Image, View} from 'react-native';

export const ListHeader = ({
  headerInfo,
}: {
  headerInfo: {
    id: number;
    title: string;
    comments: number;
    createdAt: string;
    user: string;
    image: string;
  };
}) => {
  const {id, title, comments, createdAt, user, image} = headerInfo;
  const date = new Date(createdAt);
  //   <InnerView style={{marginRight: 8}}>
  //   <Image
  //     source={{uri: image}}
  //     style={{
  //       width: 16,
  //       height: 16,
  //       backgroundColor: 'pink',
  //       borderRadius: 40,
  //     }}
  //   />
  // </InnerView>
  return (
    <HeaderView>
      <InnerView style={{flexDirection: 'row'}}>
        <InnerView>
          <Text fontSize={20} style={{marginBottom: 16}}>
            {title}
          </Text>
          <InnerView style={{flexDirection: 'row'}}>
            <Text style={{marginRight: 8}}>#{id}</Text>
            <Text style={{marginRight: 8}}>{user}</Text>
            <Text>{date.toLocaleDateString('ko-kr')}</Text>
            <InnerView style={{flex: 1, alignItems: 'flex-end'}}>
              <Text>{comments}</Text>
            </InnerView>
          </InnerView>
        </InnerView>
      </InnerView>
      <View style={{borderColor: '#929FAE', width: 100, height: 10}}></View>
    </HeaderView>
  );
};

const HeaderView = styled.View`
  width: 100%;
  justify-content: center;
  background: #f7f8f9;
  margin: 32px 0px;
`;
