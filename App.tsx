import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import Navigation from './src/navigation';
import useColorScheme from './src/hooks/useColorScheme';
import useCachedResources from './src/hooks/useCachedResources';

export default function App(): JSX.Element | null {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  );
}
