import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Toaster } from 'sonner-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
        <Toaster richColors position="top-center" style={{ marginTop: 10 }} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
