/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

//
//https://api.github.com/repos/angular/angular-cli/issues
import React, {useRef} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList} from './StackParamList';
import {IssuesScreen} from './src/screens/Issues/IssuesScreen';
import {IssueDetailScreen} from './src/screens/Issues/IssueDetailScreen';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator<StackParamList>();
  const navigationRef = useRef<NavigationContainerRef<StackParamList>>(null);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        useErrorBoundary: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer ref={navigationRef} independent={true}>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: '#f7f8f9',
            },
          }}>
          <Stack.Screen
            name="Issues"
            component={IssuesScreen}
            options={{headerShown: true, title: 'Angular / Angular-cli'}}
          />
          <Stack.Screen
            name="IssueDetail"
            component={IssueDetailScreen}
            options={{headerShown: true, title: 'Angular / Angular-cli'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
