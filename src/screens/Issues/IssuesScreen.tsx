import {FlatList, Text, View} from 'react-native';
import {useIssues} from '../../lib/hooks/useIssues';
import styled from '@emotion/native';

export const IssuesScreen = () => {
  const issues = useIssues();
  console.log(issues.data.pages);
  return (
    // <View style={{width: 100, height: 100, backgroundColor: 'red'}}></View>
    <FlatList
      style={{paddingHorizontal: 16}}
      data={issues.data?.pages}
      renderItem={({item: issue, index}) => (
        <IssueListItem>
          <Text>asd</Text>
        </IssueListItem>
      )}
    />
  );
};

const IssueListItem = styled.View`
  padding: 8px;
  width: 100%;
  background-color: 'pink';
`;
