import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList, ScrollView, Text} from 'react-native';
import {StackParamList} from '../../../StackParamList';
import {ListHeader} from '../../components/ListHeader';

type IssueDetailProps = NativeStackScreenProps<StackParamList, 'IssueDetail'>;

export const IssueDetailScreen = ({route}: IssueDetailProps) => {
  return (
    <FlatList
      style={{paddingHorizontal: 16}}
      contentContainerStyle={{paddingBottom: 60}}
      data={[0]}
      ListHeaderComponent={<ListHeader headerInfo={route.params.issueInfo} />}
      renderItem={() => <Text>{route.params.detail}</Text>}
    />
  );
};
