import { useFonts } from 'expo-font';
import React from 'react';
import Categories from './src/screens/categories';
import { ActivityIndicator } from 'react-native';
import AppNavigator from './src/navigation';

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/fonts/Lato-Light.ttf')
  })
  if(!loaded) {
    return <ActivityIndicator/>
  }

  return (
      <AppNavigator/>
  );
}
