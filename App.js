import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './screens/HomePage';
import AboutPage from './screens/AboutPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: 'blue' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#ccc' }
        }}>
          <Stack.Screen name="HomePage" component={HomePage} options={{
            title: 'My Home Page'
          }} />
          <Stack.Screen name="AboutPage" component={AboutPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
