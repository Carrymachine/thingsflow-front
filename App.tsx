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

function App(): JSX.Element {
  const Stack = createNativeStackNavigator<StackParamList>();
  const navigationRef = useRef<NavigationContainerRef<StackParamList>>(null);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        useErrorBoundary: true,
        suspense: true,
        // refetchOnWindowFocus: false,
        // refetchOnMount: false,
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
          }}>
          <Stack.Screen
            name="Issues" // 알림
            component={IssuesScreen}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
