import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './components/MainStackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
      <StatusBar barStyle="auto" />
    </NavigationContainer>
  );
}


