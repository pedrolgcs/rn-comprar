import {  Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles'
import { Button } from '@/components/ui/button';

export function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
    
        <Button>Adicionar</Button>
      </View>
    </SafeAreaView>
  );
}
